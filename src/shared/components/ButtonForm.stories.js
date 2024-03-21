import { fn } from '@storybook/test'
import ButtonForm from './ButtonForm.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'ButtonForm',
  component: ButtonForm,
  tags: ['autodocs'],
  argTypes: {
    buttonType: { control: { type: 'select' }, options: ['primary', 'cancel', 'inputForm'] },
    size: {
      control: { type: 'select' },
      options: ['compact', 'small', 'medium', 'modal', 'standard-form']
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    buttonType: 'primary',
    label: 'Principal'
  }
}

export const Secondary = {
  args: {
    label: 'Secundario'
  }
}
export const StandardForm = {
  args: {
    buttonType: 'inputForm',
    size: 'standard-form',
    label: 'Registrar'
  }
}
