/*!
 * Vuetify frontend framework running on Bedrock.
 *
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import Vuetify from 'vuetify';

export function install(Vue, options) {
  // replace default `br-root` with one that uses `v-app`
  Vue.component('br-root', {template: '<v-app><slot></slot></v-app>'});

  Vue.use(Vuetify);
}
