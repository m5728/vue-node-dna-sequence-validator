<template>
  <table class="resultstable">
    <thead>
      <tr>
        <th>Sequence</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="result in results" :key="result.sequence">
        <td :style="{ color: result.isValid ? '#4c9' : '#ff5858', padding: '10px 40px 10px 40px' }">{{ result.sequence }}</td>
        <td :style="{ color: result.isValid ? '#4c9' : '#ff5858', padding: '10px 40px 10px 40px' }">{{ result.isValid ? 'Success' : 'Invalid' }}</td>
      </tr>
    </tbody>
  </table>
</template>
  
<script>
  export default {
    props: {
      results: {
        type: Array,
        required: true,
      },
    },
  };
</script>