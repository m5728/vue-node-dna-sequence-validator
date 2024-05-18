<script>
import axios from 'axios';
export default {
  data() {
    return {
      sequence: '',
      results: [],
    };
  },
  methods: {
    submitSequence() {
      axios.post('http://localhost:3000/api/validate', { sequence: this.sequence })
        .then(response => {
          this.results.push({
            sequence: this.sequence,
            isValid: response.data.isValid,
          });
          this.sequence = '';
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <div id="app">
    <h1>DNA Sequence Evaluator</h1>
    <div>
      <input type="text" v-model="sequence" placeholder="Enter a DNA sequence" @keyup.enter="submitSequence" />
      <button @click="submitSequence" :disabled="sequence === ''">Submit</button>
    </div>
    <div class="results" v-if="results.length > 0">
      <ResultsTable :results="results" />
    </div>
  </div>
</template>

<style scoped>
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    font-family: 'helvetica';
    background-image: url('./assets/whitelab.png');
    background-size: cover;
  }

  body {
    background-color: #f0ead6;
  }

  .results {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    min-width: 300px;
    margin-top: 75px;
    background-color: #fdfdfc;
  }

  button {
    margin-left: 10px;
  }

  input {
    padding: 10px;
    margin: 10px;
    font-size: 1em;
    border: 2.4px solid #ccc;
    border-radius: 4px;
    background-color: #fdfdfc;
  }

  button {
    padding: 10px 20px;
    font-size: 1em;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  h2 {
    margin-top: 20px;
    font-size: 1.5em;
    color: #333;
  }
  h1 {
    font-size: 2em;
    color: #333;
    background-color: #fdfdfc;
    background-image: url('./assets/dnagraphic.png');
    background-size: cover;
    background-position: center center;
    padding: 10px;
    border: 3px solid #ccc;
    border-radius: 4px;
  }
</style>
