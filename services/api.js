import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://sjlmbrwxnernhokzsqkm.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqbG1icnd4bmVybmhva3pzcWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MzU2MjcsImV4cCI6MjAzODAxMTYyN30.B4yWAgm8-iVI3HuQGwT1jFiWYaL_kDNtRMeFeGxnR3w',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqbG1icnd4bmVybmhva3pzcWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MzU2MjcsImV4cCI6MjAzODAxMTYyN30.B4yWAgm8-iVI3HuQGwT1jFiWYaL_kDNtRMeFeGxnR3w',
  },
});
