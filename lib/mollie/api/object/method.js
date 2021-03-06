// Generated by CoffeeScript 1.6.3
/*
  Copyright (c) 2013, Mollie B.V.
  All rights reserved.

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

  - Redistributions of source code must retain the above copyright notice,
    this list of conditions and the following disclaimer.
  - Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND ANY
  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
  DISCLAIMED. IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
  SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
  CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
  LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
  OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
  DAMAGE.

  @license     Berkeley Software Distribution License (BSD-License 2) http://www.opensource.org/licenses/bsd-license.php
  @author      Mollie B.V. <info@mollie.nl>
  @copyright   Mollie B.V.
  @link        https://www.mollie.nl
*/


(function() {
  var Mollie;

  Mollie = {
    API: {
      Object: {}
    }
  };

  module.exports = Mollie.API.Object.Method = (function() {
    Method.IDEAL = "ideal";

    Method.PAYSAFECARD = "paysafecard";

    Method.CREDITCARD = "creditcard";

    Method.MISTERCASH = "mistercash";

    Method.BANKTRANSFER = "banktransfer";

    Method.PAYPAL = "paypal";

    Method.BITCOIN = "bitcoin";

    Method.SOFORT = "sofort";

    function Method() {
      this.id = null;
      this.description = null;
      this.amount = {
        minimum: null,
        maximum: null
      };
      this.image = {
        normal: null,
        bigger: null
      };
    }

    Method.prototype.getMinimumAmount = function() {
      var _ref;
      return parseFloat(((_ref = this.amount) != null ? _ref.minimum : void 0) || "0");
    };

    Method.prototype.getMaximumAmount = function() {
      var _ref;
      return parseFloat(((_ref = this.amount) != null ? _ref.maximum : void 0) || "0");
    };

    return Method;

  })();

}).call(this);
