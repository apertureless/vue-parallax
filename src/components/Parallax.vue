<template>
  <div
    ref="block"
    :class="[sectionClass]"
    :style="{ height: sectionHeight + 'vh' }"
  >
    <div
      ref="parallax"
      :class="[parallax ? parallaxClass : '', fixed ? fixedClass : '', containerClass]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parallax',
  props: {
    parallax: {
      default: true,
      type: Boolean
    },
    speedFactor: {
      default: 0.15,
      type: Number
    },
    fixed: {
      default: false,
      type: Boolean
    },
    breakpoint: {
      default: '(min-width: 968px)',
      type: String
    },
    sectionHeight: {
      default: 70,
      type: Number,
      required: false
    },
    sectionClass: {
      type: String,
      default: 'Masthead'
    },
    containerClass: {
      type: String,
      default: 'Masthead__image'
    },
    parallaxClass: {
      type: String,
      default: 'is-parallax'
    },
    fixedClass: {
      type: String,
      default: 'is-fixed'
    },
    direction: {
      type: String,
      default: 'up'
    }
  },

  data () {
    return {
      el: null,
      mediaQuery: null
    }
  },

  computed: {
    directionValue () {
      return this.direction === 'down' ? 1 : -1
    }
  },

  mounted () {
    if (this.parallax && !this.fixed) {
      this.el = this.$refs.parallax
      this.init()
    }
  },

  beforeUnmount () {
    this.teardown()
  },

  methods: {
    animateElement () {
      const parentHeight = this.$refs.block.offsetHeight
      const parallaxHeight = this.$refs.parallax.offsetHeight
      const availableOffset = parallaxHeight - parentHeight
      const animationValue = (window.scrollY * this.speedFactor)

      if (animationValue <= availableOffset && animationValue >= 0) {
        this.el.style.transform = `translate3d(0, ${animationValue * this.directionValue}px ,0)`
      }
    },

    scrollHandler () {
      window.requestAnimationFrame(() => {
        if (this.isInView(this.$refs.parallax)) {
          this.animateElement()
        }
      })
    },

    isInView (el) {
      if (!el) {
        return false
      }

      const rect = el.getBoundingClientRect()

      return (
        rect.bottom >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      )
    },

    setupListener () {
      if (this.mediaQuery.matches) {
        window.addEventListener('scroll', this.scrollHandler, false)
      } else {
        window.removeEventListener('scroll', this.scrollHandler, false)
      }
    },

    init () {
      this.mediaQuery = window.matchMedia(this.breakpoint)

      if (this.mediaQuery) {
        this.mediaQuery.addEventListener('change', this.setupListener)
        this.setupListener()
      }
    },

    teardown () {
      window.removeEventListener('scroll', this.scrollHandler, false)

      if (this.mediaQuery) {
        this.mediaQuery.removeEventListener('change', this.setupListener)
      }
    }
  }
}
</script>

<style>
.Masthead {
  position: relative;
  min-height: 21.875rem;
  scroll-behavior: smooth;
  overflow: hidden;
  z-index: -1;
}

@media (min-width: 768px) {
  .Masthead {
    min-height: 100vh;
  }
}

.Masthead__image {
  width: 100%;
  overflow: hidden;
  height: 120%;
}

.Masthead__image > img {
  height: 100%;
  max-width: none;
  width: 100%;
  object-fit: cover;
  object-position: top;
}

.Masthead__image.is-parallax {
  left: 0;
  position: absolute;
  will-change: transform;
  right: 0;
  top: 0;
}

.Masthead__image.is-parallax > img {
  height: 100%;
  max-width: none;
  width: 100%;
  object-fit: cover;
  object-position: top;
}

.Masthead__image.is-fixed {
  position: fixed;
  will-change: transform;
}

.Masthead__image.is-fixed > img {
  height: 100vh;
  max-width: none;
}
</style>
