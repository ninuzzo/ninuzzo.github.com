/*

Simple digital JavaScript clock and visitor-to-author time zone converter.
Version of 15 Apr 2012.

Copyright (c) 2012 Antonio Bonifati http://ninuzzo.github.com/about.html

This work is licensed under the Creative Commons
Attribution-NonCommercial-ShareAlike 3.0 Unported License. To view a copy of
this license, visit http://creativecommons.org/licenses/by-nc-sa/3.0/ or send a
letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View,
California, 94041, USA.

*/

/* References:
   http://it.wikipedia.org/wiki/Ora_legale
   http://en.wikipedia.org/wiki/Daylight_saving_time#Computing
   http://www.utelio.it/ora-legale.php
   http://www.timezoneconverter.com/cgi-bin/tzc.tzc

   I prefer the standard JavaScript 24-hour clock rather than the AM/PM format.
   It may be sometimes easier to read but it has some subtle ambiguities:
   http://en.wikipedia.org/wiki/A.m.#Confusion_at_noon_and_midnight

   DEBUG: simply change the timezone before launching your browser, e.g.
   $ TZ=/usr/share/zoneinfo/America/New_York chromium &
*/

/* This is a one time object that holds all properties and methods offered by
   this library to your web application. Using this object minimized pollution
   of the global namespace and reduces chances of name collitions. */
var tz_clock = {
  cet_cest: function(dt) {
    /* Converts a date to the CET or CEST time zone. In the latter case it
       applies a DST correction for the CET (Central Europe solar time) timezone
       (UTC+1). This algorithm has to be changed whenever DST rules change,
       although that is unlikely to happen for Central Europe now.
  
       For CET, DST (alias summer time) is 1 forward and applies from the last
       Sunday of March 01:00 UTC (that is 02:00 CET -> 03:00 CEST, one hour
       forward) till the last Sunday of October 01:00 UTC (that is 03:00 CEST ->
       02:00 CET, one hour backward). */
  
     /* We want to convert the local time into the CET/CEST time zone, if it not
        already in that form. It is much more straighforward to do our
        calculations in UTC, working with numeric timestamps rather than dates,
        especially because the JavaScript Date object only supports local dates
        directly. So let's turn the local time into a UTC timestamp in the first
        place! Then we apply any DST correction to the UTC time, before shifting
        it to the local solar time (but it remains a time stamp expressed in
        UTC). I guess doing things this way and this order simplifies the DST
        correction algorithm, because it's condition is expressed in UTC terms. */
    var time = dt.getTime(), // Milliseconds since 1970-01-01 00:00:00 UTC.
      // Note that months start from 0! 2 is March, 9 is October.
      UTC_year = dt.getUTCFullYear(), tz_offset,
      dst1 = Date.UTC(UTC_year, 2, 31, 1), // March has always 31 days
      dst2 = Date.UTC(UTC_year, 9, 31, 1); // Ditto for October
    // 31 - week day of the last day of the month
    // = day (date) of the last Sunday of the month
    dst1 = Date.UTC(UTC_year, 2, 31 - new Date(dst1).getUTCDay(), 1);
    dst2 = Date.UTC(UTC_year, 9, 31 - new Date(dst2).getUTCDay(), 1);
  
    // DEBUG
    /*console.log(dst1);
    console.log(time);
    console.log(dst2);*/
  
    if (time >= dst1 && time < dst2) {
      // We're in CEST, that is summer time. Go one hour forward!
      time += 3600000; // 60 minute * 60 second/minute * 1000 millisecond/second
      tz_offset = -120; // this is in minutes (UTC time minus my time)
    } else {
      tz_offset = -60; // this is in minutes (UTC time minus my time)
    }
  
    /* Now add the Central Europe solar time (UTC+1) timezone offset.
       Generically for UTC+-X you write +- 60*X*60000, e.g. in my case,
       for UTC+1, I have +60*1*60000 = + 3600000 */
    time += 3600000;
  
    return { tz_offset: tz_offset, time: time };
  },
  
  // -- Public, read-only variables definition:
  // Current visitor local time datetime object.
  //tz_clock.visitor_dt
  
  // Current visitor local time string truncated to the minute.
  //tz_clock.visitor_t
  
  /* The visitor (or local) time-zone offset is the difference, in minutes,
     between UTC and the visitor local time. Note that this means the offset is
     positive if the visitor timezone is behind UTC and negative if it is ahead.
     For example, if the visitor's time zone is UTC+1 (Central European Time),
     -60 will be returned, not +60. Daylight savings time prevents this value
     from being a constant even for a given visitor. E.g. in Central Europe,
     during DST you will get -120, that is UTC+2. */
  //tz_clock.visitor_tz_offset
  
  /* This is an human-readable English string of the hours and minutes of
     difference between the visitor's time and my time. E.g.:
     1 hour forward
     2 hours backward
     2 hour and 30 minutes forward
     3 hours and 45 minutes backward
     and so on. It is empty if there is no time difference. */
  //tz_clock.difference_string
  
  // My current time in a local datetime object. Timezone is wrong if you display
  // it in full: it is the visitor's time zone, not yours.
  //tz_clock.my_dt
  
  // My local time string truncated to the minute.
  //tz_clock.my_t
  // ... public, read-only variables ends --
  
  // -- Object code begins:
  hhmm: function(time_string) {
    return time_string.substr(0,5);
  },

  time_diff_string:  function(minutes) {
    var str = '';
    if (minutes) {
      var abs_min = Math.abs(minutes), hh = Math.floor(abs_min/60),
        mm = abs_min % 60;
      if (hh) {
        str += hh + (hh == 1 ? ' hour' : ' hours');
      }
      if (mm) {
        if (str) {
          str += ' and ';
        }
        str += mm + (mm == 1 ? ' minute' : ' minutes');
      }
      str += (minutes > 0 ? ' forward' : ' backward');
    }
    return str;
  },
  
  update_state: function() {
    this.visitor_dt = new Date();
    this.visitor_t = this.hhmm(this.visitor_dt.toTimeString());
    // Note this is not a constant because this code may happen
    // to run during DST clock changes!
    this.visitor_tz_offset = this.visitor_dt.getTimezoneOffset();
  
    // Call the configured conversion function.
    var result = this.my_tz_function(this.visitor_dt),
      /* Ok, now we have my time in UTC, but in order to display it correctly,
         since the JavaScript object has an internal representation based on the
         local time (which is the visitor time), we need to add the local time zone
         offset. This is the tricky part! Think about it. We have a time in UTC
         that corresponds to your time, but we cannot tell the Date class to
         display it using your time zone. It can only display it using the visitor
         timezone, so we need to compensate for that! It's so simple! */
      // X minute * 60 second/minute * 1000 millisecond/second
      my_corrected_time = result.time + this.visitor_tz_offset * 60000;
    this.my_tz_offset = result.tz_offset;
  
    this.my_dt = new Date(my_corrected_time);
    this.my_t = this.hhmm(this.my_dt.toTimeString());
    this.difference_string = this.time_diff_string(this.my_tz_offset
      - this.visitor_tz_offset);
  },
  
  update_clocks: function () {
    this.update_state();
  
    var elem;
    if (elem = document.getElementById('tz_clock_visitor')) {
      elem.textContent = this.visitor_t;
    }
    if (elem = document.getElementById('tz_clock_my')) {
      elem.textContent = this.my_t;
    }
  },

  // Automatically update clock every minute.
  auto_update: function() {
    /* The closures are needed because in JavaScript there's
       no intrinsic "binding" of functions to any object. */
    setTimeout(function() {
      tz_clock.update_clocks();
      setInterval(function() { tz_clock.update_clocks(); }, 60000);
    }, (60 - this.visitor_dt.getSeconds()) * 1000);
  }
  // ... object code ends --
}; // End of object literal.

// Main.

// -- Configuration starts
/* Select your time zone and DST correction function in one go here. This function
   has to be defined before (see above). A good practice is to name the
   function after your time zone name. This function has to take as input the
   Date object to convert and has to return two values: the (possibly
   DST-corrected) UTC timestamp (that is the date in your time zone
   corresponding to the input date, but expressed in UTC as a number) and your
   time zone offset in minutes.  The latter changes only when DST is observed
   and should be returned using the same format as Date.getTimezoneOffset().
   Examples:

   CET or UTC+1:  return value  -1*60=-60
   CEST or UTC+2: return value  -2*60=-120
   EST or UTC-5:  return value  +5*60=+300
   EDT or UTC-4:  return value  +4*60=+240 */
tz_clock.my_tz_function = tz_clock.cet_cest;
// configuration ends --

tz_clock.update_state();
