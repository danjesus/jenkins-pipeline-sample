pipeline {
  agent {
    docker 'node:7.10-alpine'
  }
  stages {
    stage('Build') {
      steps {
        echo 'Building..'
        sh 'npm install'
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
