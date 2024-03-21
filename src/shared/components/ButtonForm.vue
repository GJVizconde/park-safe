<template>
  <button
    type="button"
    :class="[classes, sizeButton, 'inline-flex justify-center items-center   ']"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  // ButtonProperties:[type, size, status]
  name: 'ButtonForm',
  props: {
    label: {
      type: String,
      required: true
    },
    //Button properties: [size, buttonType, status]
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['compact', 'small', 'medium', 'modal', 'standard-form'].includes(value)
      }
    },
    buttonType: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'cancel', 'inputForm'].includes(value)
      }
    },
    disabled: Boolean,
    isLoading: Boolean
  },
  emits: ['click'],
  setup(props) {
    props = reactive(props)

    const classes = computed(() => ({
      [`font-semibold rounded cursos-pointer bg-red-500`]: props.buttonType === 'primary',
      [`border border-blue-500 text-blue-500`]: props.buttonType === 'cancel',
      [`font-bold rounded-[10px] bg-redButtonInput text-white tracking-wider`]:
        props.buttonType === 'inputForm'
    }))

    const sizeButton = computed(() => ({
      'md: h-[80px] px-5': props.size === 'compact',
      'md: text-xs h-10 px-5': props.size === 'small',
      'md: h-[40px] px-[18px]': props.size === 'medium',
      'md: h-[46px] px-[27px]': props.size === 'standard-form'
    }))

    return {
      classes,
      sizeButton
    }
  }
}
</script>
