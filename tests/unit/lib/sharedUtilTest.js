/*jslint white: true */
/*global module, String, require, console */

/**
 * Copyright (c) 2014 brian@bevey.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/**
 * @author brian@bevey.org
 * @fileoverview Unit test for sharedUtil.js
 */

State = {};

exports.sharedUtilTest = {
  encodeName : function (test) {
    'use strict';

    var util = require(__dirname + '/../../../lib/sharedUtil');

    test.strictEqual(util.util.encodeName(' \' $ This is a bad %^ ! name()'), '_____this_is_a_bad______name__', 'Name encoded');
    test.strictEqual(util.util.encodeName('ThisIsAGoodName'),                 'thisisagoodname',                'Name encoded');

    test.done();
  },

  translate : function (test) {
    'use strict';

    var util = require(__dirname + '/../../../lib/sharedUtil');

    test.strictEqual(util.util.translate('THERMOSTAT', 'nest', 'en'), 'Thermostat', 'Token translated');

    test.done();
  },

  arrayList : function (test) {
    'use strict';

    var util = require(__dirname + '/../../../lib/sharedUtil');

    test.strictEqual(util.util.arrayList(['One', 'Two', 'Three'], 'nest', 'en'), 'One, Two and Three', 'Long list');
    test.strictEqual(util.util.arrayList(['One', 'Two'],          'nest', 'en'), 'One and Two',       'Short list');
    test.strictEqual(util.util.arrayList(['One'],                 'nest', 'en'), 'One',                'Single item');

    test.done();
  }
};
