import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Router from 'vue-router';

import Hoge from '@/components/Hoge.vue';
const localVue = createLocalVue();
localVue.use(Router);
const RouterLink = localVue.component('router-link');

describe('Hoge.vue', () => {
  it('RouteLinkが利用できるか', () => {
    const wrapper = shallowMount(Hoge, { localVue });

    wrapper.is(Hoge);
    expect(wrapper.findAll(RouterLink)).to.length(1);
  });
});
