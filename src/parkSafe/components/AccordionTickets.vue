<template>
  <div class="w-full flex flex-col px-5 bg-white border">
    <section class="text-[#020C41]">
      <div
        :class="[
          'flex items-center py-5 justify-between border-[#D9D9D7] cursor-pointer bg-white',
          {
            'border-b ': isOpen
          }
        ]"
        @click="toggleAccordion"
      >
        <div class="bg-white flex gap-7">
          <span class="text-xs uppercase bg-white">{{ id }}</span>
          <span class="text-xs uppercase bg-white">{{ name }}</span>
        </div>
        <div
          class="flex gap-2 items-center justify-center text-xs text-blue-600 select-none bg-white"
        >
          <a class="no-underline bg-white">{{ view_more }}</a>
          <img
            src="/images/down-blue-arrow.svg"
            :class="[
              ' select-none bg bg-white',
              {
                [`rotate-180 transition-all duration-${transition_ms}`]: isOpen,
                [`transition-all duration-${transition_ms}`]: !isOpen
              }
            ]"
          />
        </div>
      </div>
      <div
        :class="[
          'text-xs text-left items-center justify-center bg-white overflow-hidden',
          accordionClasses
        ]"
        :style="{ height: isOpen ? accordionHeight + 'px' : '0' }"
        ref="accordionRef"
      >
        <div class="grid grid-cols-[1fr_3fr] border-b pb-5 gap-x-2 pt-5 items-center bg-white">
          <p class="text-amTextGray bg-white">{{ licensePlate_title }}</p>
          <p class="bg-white">{{ licensePlate }}</p>
        </div>
        <div class="grid grid-cols-[1fr_3fr] border-b pb-5 gap-x-2 pt-5 items-center bg-white">
          <p class="text-amTextGray bg-white">{{ description_title }}</p>
          <p class="bg-white">{{ description }}</p>
        </div>

        <div class="text-center bg-white">
          <a
            @click="$emit('quitVehicle', quit_id)"
            class="text-amBlueInnovation my-5 mx-auto inline-block bg-red-400 rounded p-2 text-white"
            >{{ quit_title }}</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, ref, nextTick } from 'vue'

export default {
  name: 'AccordionDiscrepancy',
  props: {
    id: String,
    name: String,
    view_more: String,
    licensePlate_title: String,
    licensePlate: String,
    description_title: String,
    description: String,
    quit_title: String,
    quit_id: String,

    transition_ms: { type: Number, default: 1000 }
  },
  emits: ['quitVehicle'],
  setup(props) {
    const isOpen = ref(false)
    const accordionRef = ref(null)
    let accordionHeight = ref(0)

    const accordionClasses = computed(() => {
      return {
        // hidden: !isOpen.value
        [`transition-all duration-${props.transition_ms} ease-in-out`]: isOpen,
        [`transition-height duration-${props.transition_ms} ease-in-out`]: !isOpen
      }
    })

    const toggleAccordion = () => {
      isOpen.value = !isOpen.value

      nextTick(() => {
        if (isOpen.value) {
          accordionHeight.value = accordionRef.value.scrollHeight
          // console.log('Opened Accordeon  Height =>', accordionHeight.value)
        } else {
          accordionHeight.value = 0
          // console.log(' Closed Accordeon Height =>', accordionHeight.value)
        }
      })
    }

    return {
      accordionRef,
      accordionHeight,
      accordionClasses,
      isOpen,
      toggleAccordion
    }
  }
}
</script>
