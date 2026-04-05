pipeline {
    agent any
    stages {
        
        stage('1. Checkout') {
            steps {
                git 'https://github.com/aanchalg1007/mydocker.git'
            }
        }
        
        stage('2. Build Images') {
            steps {
                bat 'docker build -f Dockerfile.node -t my-node-app .'
                bat 'docker build -f Dockerfile.html -t my-html-app .'
            }
        }

        stage('3. Cleanup Old Containers') {
            steps {
                bat 'docker stop node-cont html-cont || exit 0'
                bat 'docker rm node-cont html-cont || exit 0'
            }
        }

        stage('4. Deploy Containers') {
            steps {
                bat 'docker run -d -p 3000:3000 --name node-cont my-node-app'
                bat 'docker run -d -p 8000:80 --name html-cont my-html-app'
            }
        }
    }
}
