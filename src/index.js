/*
 * Copyright © 2019 Phaeton Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Phaeton Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

'use strict';

const BigNum = require('bignum');
const cryptography = require('phaeton-cryptography');
const transactions = require('phaeton-transactions');
const {
	Application,
	version,
	systemDirs,
	configurator,
} = require('phaeton-framework');

const samples = require('./samples');

module.exports = {
	Application,
	version,
	systemDirs,
	configurator,
	BigNum,
	cryptography,
	transactions,
	...samples,
};
