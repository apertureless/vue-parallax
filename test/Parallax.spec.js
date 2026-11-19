import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Parallax from '../src/components/Parallax.vue'

function mockMatchMedia (matches = true) {
  const mediaQuery = {
    matches,
    media: '',
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }

  window.matchMedia = vi.fn().mockImplementation(() => mediaQuery)
  return mediaQuery
}

describe('Parallax', () => {
  beforeEach(() => {
    mockMatchMedia(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(Parallax, {
      slots: {
        default: '<img src="test.jpg" alt="test">'
      }
    })

    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('applies default section and container classes', () => {
    const wrapper = mount(Parallax)

    expect(wrapper.classes()).toContain('Masthead')
    expect(wrapper.find('.Masthead__image').exists()).toBe(true)
    expect(wrapper.find('.is-parallax').exists()).toBe(true)
  })

  it('applies the fixed class when fixed is true', () => {
    const wrapper = mount(Parallax, {
      props: { fixed: true }
    })

    expect(wrapper.find('.is-fixed').exists()).toBe(true)
    expect(wrapper.find('.is-parallax').exists()).toBe(true)
  })

  it('sets section height from the prop', () => {
    const wrapper = mount(Parallax, {
      props: { sectionHeight: 50 }
    })

    expect(wrapper.attributes('style')).toContain('height: 50vh')
  })

  it('uses custom class props', () => {
    const wrapper = mount(Parallax, {
      props: {
        sectionClass: 'Hero',
        containerClass: 'Hero__image',
        parallaxClass: 'has-parallax'
      }
    })

    expect(wrapper.classes()).toContain('Hero')
    expect(wrapper.find('.Hero__image').exists()).toBe(true)
    expect(wrapper.find('.has-parallax').exists()).toBe(true)
  })

  it('attaches a scroll listener on desktop breakpoints', () => {
    const addEventListener = vi.spyOn(window, 'addEventListener')
    mount(Parallax)

    expect(addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function), false)
  })

  it('does not attach a scroll listener below the breakpoint', () => {
    mockMatchMedia(false)
    const addEventListener = vi.spyOn(window, 'addEventListener')
    mount(Parallax)

    expect(addEventListener.mock.calls.some(([event]) => event === 'scroll')).toBe(false)
  })

  it('removes listeners on unmount', () => {
    const mediaQuery = mockMatchMedia(true)
    const removeEventListener = vi.spyOn(window, 'removeEventListener')
    const wrapper = mount(Parallax)

    wrapper.unmount()

    expect(removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function), false)
    expect(mediaQuery.removeEventListener).toHaveBeenCalledWith('change', expect.any(Function))
  })
})
