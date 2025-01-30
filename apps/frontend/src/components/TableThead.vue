<script>
export default {
  props: ['columnCaptions'],
}
</script>

<template>
  <thead>
    <tr>
      <th>id</th>
      <th v-for="(columnCaption, idx) of columnCaptions" :key="idx">
        {{ columnCaption }}
      </th>
      <th>do</th>
    </tr>
  </thead>
</template>
