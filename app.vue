<template>
  <div>
    <VContainer>
      <iconify-icon icon="mdi:email" :inline="true" />
      <iconify-icon icon="mdi:calendar" :inline="true" />
      <VIcon icon="radioOn" />
      <VIcon icon="radioOff" />
      <VBtn color="success" prepend-icon="email">
        email
      </VBtn>
      <VBtn color="success" prepend-icon="calendar">
        calendar
      </VBtn>
      <VBtn color="success" prepend-icon="close">
        close
      </VBtn>

      <v-select
        label="Select"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
      />

      <VCheckbox label="Checkbox" />

      <VRadioGroup>
        <VRadio label="Radio One" value="one" />
        <VRadio label="Radio Two" value="two" />
        <VRadio label="Radio Three" value="three" />
      </VRadioGroup>
    </VContainer>
  </div>
</template>
