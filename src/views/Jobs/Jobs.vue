<template>
    <div>
      <h1>Jobs View</h1>
      <div v-if="jobsData.length">
      <div v-for="job in jobsData" :key="job.id">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">   
        <H1> {{job.title + " | " + job.views}}</H1>
       </router-link>
    </div>
      </div>

    </div>
</template>

<script>
export default {
    name: "JobsView",
    data(){
        return {
            jobsData:[]
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
        .then(res =>res.json())
        .then(data => this.jobsData=data)
        .catch(err=> console.log(err));
    },
}

</script>