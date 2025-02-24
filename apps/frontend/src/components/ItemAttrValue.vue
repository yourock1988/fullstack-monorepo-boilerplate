<script>
export default {
  props: ['attrValue', 'idx', 'subIdx', 'modelValue'],

  emits: ['update:modelValue'],
}
</script>

<template>
  <li>
    <div class="wrap-checkbox-fa">
      <input
        :id="`attr-${idx}-${subIdx}`"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
      <label :for="`attr-${idx}-${subIdx}`">
        <i class="fa-solid fa-square-check"></i>
        <i class="fa-solid fa-square"></i>
        <span>
          {{ attrValue.caption }}<sup>({{ attrValue.count }})</sup></span
        >
      </label>
    </div>
  </li>
</template>
