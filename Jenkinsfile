pipeline {
  agent {
    docker 'node:7.5'
  }
  stages {
    stage('Build') {
      steps {
        echo 'Building..'
        sh 'npm install'
        sh 'whoami'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing..'
        sh 'npm t'
      }
    }
  }
}