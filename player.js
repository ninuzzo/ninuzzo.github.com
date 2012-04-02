/*

Structural language learning and tandem method.
A JavaScript computer program for coaching.
Version of 31 Mar 2012.

Copyright (c) 2012 Antonio Bonifati http://ninuzzo.freehostia.com/about.html

This work is licensed under the Creative Commons
Attribution-NonCommercial-ShareAlike 3.0 Unported License. To view a copy of
this license, visit http://creativecommons.org/licenses/by-nc-sa/3.0/ or send a
letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View,
California, 94041, USA.

*/

// Convention: lk = language known; l1 = language 1; l2 = language 2 (tandems only)

/* Drop this function definition if you are already
   using a JavaScript library that defines it */
function $(id) {
  return document.getElementById(id);
}

var sampa = {};

window.onload = function() {
  // http://stackoverflow.com/questions/950087/include-javascript-file-inside-javascript-file
  function load_script(url, callback) {
    // Add a script tag to the head.
    var head = document.getElementsByTagName('head')[0],
      script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
   
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;
   
    // Fire the loading.
    head.appendChild(script);
  }

  function main() {
    var step, steps = lesson.length, lname = {
      // TODO: add other languages here.
      de: 'German', it: 'Italian'
    };

    function format_iso_date(date) {
      var month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
        'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      date = new Date(date);
      return date.getDate() + ' ' + month_names[date.getMonth()] + ' '
        + date.getFullYear();
    }

    function goto(newstep) {
      function s2a(value) {
        return value instanceof Array ? value : [value];
      }

      /* This plays a file, and calls a callback once completed
         (if a callback is set). See:
         http://stackoverflow.com/questions/9456238/i-want-to-play-a-multiple-sound-files-base-on-queue */
      function play(audio, callback) {
        audio.play();
        if (callback) {
          // When the audio object completes it's playback,
          // call the callback provided      
          audio.onended = callback;
        }
      }

      // Plays multiple sound files based on a queue
      function play_sound_queue(sounds) {
        var index = 0;

        function recursive_play() {
          // If the index is the last of the table, play the sound
          // without running a callback after       
          if (index + 1 === sounds.length) {
            play(sounds[index], null);
          } else {
            /* Else, play the sound, and when the playing is complete
               increment index by one and play the sound in the 
               indexth position of the array */
            play(sounds[index], function() { index++; recursive_play(); });
          }
        }

        // Call the recursive_play for the first time
        if (sounds) { recursive_play(); };
      }

      function play_definitions() {
        function get_definitions(lang) {
          // http://stackoverflow.com/questions/2430121/javascript-concatenate-multiple-nodelists-together
          return [].slice.call($('definitions_' + lang)
            .getElementsByTagName('audio'));
        }

        var definitions;
        if ($('l1').checked) {
          definitions = get_definitions('l1');
        }
        if (tandem && $('l2').checked) {
          if (definitions) {
            definitions.concat(get_definitions('l2'));
          } else {
            definitions = get_definitions('l2');
          }
        }

        // Play the definition(s).
        play_sound_queue(definitions);
      }

      // Returns a list of sentences in the given language,
      // optionally asking the user to guess before.
      function define(lang, sentences, guess_mode) {
        // Until Microsoft and Apple decide to support OGG,
        // I have to provide MP3 as well. I hate 'em!
        function audio_source(sentence) {
          // I would like to use ['ogg','mp3'].forEach(function (format) { ... });
          // but Explorer does not still support it ATTOW
          var html = '', format = ['ogg','mp3'];
          for (var i = 0; i < 2; i++) {
            html += '<source src="http://web.tiscali.it/insegnanteitaliano/audio/'
              + lang + '/'
              /* Windows NTFS forbids the following characters: " * : < > ? \ / |
                 Trim or replace the ones we happen to use,
                 for now only replace ? with Q */
              + encodeURIComponent(sentence.replace(/\?/g, 'Q'))
              + '.' + format[i] + '" type="audio/' + format[i] + '" />';
          }
          return html;
        }

        function reveal_definitions(lang_name) {
          var definitions = $('definitions_' + lang_name);
        
          // Show the solution(s).
          definitions.style.display = 'block';
          // Play the solution(s).
          play_sound_queue(definitions.getElementsByTagName('audio'));
        }
 
        // Returns the SAMPA pronunciation of a sentence as a string
        function pronunciation(lang, sentence) {
          // Trims punctuation marks from the beginning and end of a string
          // (not the middle)
          function trim_punctuation(string) {
            // TODO: add other marks here as they are used
            return string.replace(/^[?!,.]+|[?!,.]+$/g, '');
          }

          var sentence_sampa = '/', word = sentence.split(/\s+/);
          for (var i = 0; i < word.length; i++) {
            var word_sampa;
            if (typeof (word_sampa = sampa[lang][trim_punctuation(word[i])])
              == 'undefined') {
              word_sampa = '?'; // Denotes a missing word pronunciation.
            }
            if (sentence_sampa != '/') {
              sentence_sampa += ' ';
            }
            sentence_sampa += word_sampa;
          }
          return sentence_sampa + '/';
        }

        // function define begins.

        var html,
          lang_name,  // Which of the three languages lang is?
          bridge = lang == lk,  // Tells whether lang is the bridge language.
          learning;   // Tells whether lang is a language the user is learning.

        switch (lang) {
          case lk:
            lang_name = 'lk';
          break;

          case l1:
            lang_name = 'l1';
          break;

          case l2:
            lang_name = 'l2';
          break;

          default:
            console.warn('Undefined lesson language ' + lang);
          return;
        }

        if (bridge) {
          html = '<dt lang="' + lang + '"><ul>';
        } else {
          html = '<dd lang="' + lang + '">';
          if ((learning = $(lang_name).checked) && guess_mode) {
            html += '<textarea rows="2" cols="40" autofocus="" '
              + 'placeholder="speak your answer and optionally write it here in '
              + lname[lang] + ' and then compare"></textarea>'
              + '<button id="check_' + lang_name + '">check</button>'
              + '<ul id="definitions_' + lang_name + '" style="display: none">';
            /* This trick allows me to use to attach an event handler without
               polluting the global namespace or having to generatore HTML code
               using boring DOM calls. */
            setTimeout(function () {
              $('check_' + lang_name).onclick = function () {
                reveal_definitions(lang_name);
              };
            }, 0);
          } else {
            html += '<ul id="definitions_' + lang_name + '">';
          }
        }

        sentences = s2a(sentences);
        for (var i = 0; i < sentences.length; i++) {
          var sentence = sentences[i];
          html += '<li>';

          if (bridge) {
            html += sentence;
          } else {
            var id = lang + i; // It just have to be unique in the page.
            html += '<audio id="' + id + '"'
              + (learning ? ' preload="auto"' : ' preload="none"')
              + '>' + audio_source(sentence) + '</audio><button onclick="$(\''
              + id + "').play()\" title='" + pronunciation(lang, sentences[i])
              + "'>" + sentences[i] + '</button>';
          }
          html += '</li>';
        }

        html += '</ul>' + (bridge ? '</dt>' : '</dd>');

        // DEBUG
        //alert(html);
        return html;
      }

      // Returns a comment in one or more paragraphs.
      function comments(sentences) {
        var html = '';
        if (sentences) {
          sentences = s2a(sentences);
       	  for (var i = 0; i < sentences.length; i++) {
       	    html += '<p>' + sentences[i] + '</p>';
          }
       	}
        return html;
      }

      // function goto begins.

      // Update controls.
      // + needed to make sure step remains a number!
      $('step').value = step = +newstep;

      if (step == 1) {
        $('first').disabled = true;
        $('previous').disabled = true;
      } else {
        $('first').disabled = false;
        $('previous').disabled = false;
      }

      if (step == steps) {
        $('next').disabled = true;
        $('last').disabled = true;
      } else {
        $('next').disabled = false;
        $('last').disabled = false;
      }

      // Update content.
      var slide = lesson[step-1], guess_mode;
      switch (slide[0]) {
        case 'tra':
          guess_mode = true;
        case 'def':
        	$('translations').innerHTML = '<dl>' + define(lk, slide[1])
            + define(l1, slide[2], guess_mode)
            + (tandem ? define(l2, slide[3], guess_mode) : '') + '</dl>';
          if (! guess_mode) {
            // Don't play the definitions right away, give the user
            // a bit of time to read and concentrate before playing starts.
            setTimeout(function () { play_definitions(); }, 1 * 1000);
          }

        	$('comments').innerHTML = comments(slide[tandem ? 4 : 3]);
        break;

        case 'com':
          $('translations').innerHTML = '';
        	$('comments').innerHTML = comments(slide[1]);
        break;

        // TODO: implement other slide types here, if needed!

        default:
          console.warn('Unknown slide type ' + slide[0]);
      }
    }

    // Attach events.

    // Navigation bar.
    $('first').onclick = function () {
      goto(1);
      return false;	// This avoids a page reload.
    };
    $('previous').onclick = function () { goto(step - 1); return false; };
    $('step_form').onsubmit = function () { goto($('step').value); return false; };
    $('step').onclick = function () { this.select(); };
    $('step').onblur = function () {
      if (this.value < 1 || this.value > steps) {
        this.value = step;
      }
    };
    $('next').onclick = function () { goto(step + 1); return false; };
    $('last').onclick = function () { goto(steps); return false; };

    // Other.
    $('l1').onchange = function() { goto(step); };
    if (tandem) $('l2').onchange = function() { goto(step); };

    // Initialize HTML.
    $('step').min = 1;
    $('step').max = $('steps').textContent = steps;
    $('ll1').textContent = lname[l1];
    if (tandem) $('ll2').textContent = lname[l2];
    $('title').textContent = title;
    $('date').setAttribute('datetime', date);
    $('date').textContent = format_iso_date(date);

    // Display first slide.
    goto(1);
  } // main

  // Make sure the data file is loaded before the main player code.
  var path = location.pathname, pos = path.lastIndexOf('/') + 1, tandem;
  load_script(path.substr(pos, path.lastIndexOf('.') - pos) + '/'
    + location.search.substring(1) + '.js', function () {
    // Make sure the SAMPA files are loaded before the main player code.
    load_script('sampa/' + l1 + '.js', function () {
      tandem = typeof l2 != 'undefined';
      if (tandem) {
        load_script('sampa/' + l2 + '.js', main);
      } else {
        main();
      }
    });
  }); // load_script
}; // window.onload

/* vim: set ft=javascript et ts=2 sw=2 ai si: */
