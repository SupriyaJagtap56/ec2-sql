pipeline {
  agent any
  stages {
    stage('Init') {
      agent {
        docker {
          image 'node:16'
        }

      }
      steps {
        sh 'npm i'
        sh 'npm run build'
        echo 'No tests'
        echo 'Test'
      }
    }

    stage('Test') {
      steps {
        echo 'test'
      }
    }

    stage('Deploy') {
      steps {
        echo 'deploy'
      }
    }

  }
}