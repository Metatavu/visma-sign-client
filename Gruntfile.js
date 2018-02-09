/*global module:false*/

const fs = require('fs');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  const JAVASCRIPT_VERSION = require('./javascript-generated/package.json').version;
  const SWAGGER_SRC = "https://oss.sonatype.org/content/repositories/snapshots/io/swagger/swagger-codegen-cli/3.0.0-SNAPSHOT/swagger-codegen-cli-3.0.0-20180112.231857-20.jar";
  
  grunt.registerMultiTask('javascript-package-update', 'Updates package.json -file', function () {
    const packageJson = JSON.parse(fs.readFileSync('javascript-generated/package.json'));
    fs.writeFileSync('javascript-generated/package.json', JSON.stringify(Object.assign(packageJson, this.data.fields), null, 2));
  });

  grunt.initConfig({
    'curl': {
      'swagger-codegen':  {
        src: SWAGGER_SRC,
        dest: 'swagger-codegen-cli.jar'
      }
    },

    'shell': {
      'javascript-generate': {
        command : 'java -jar swagger-codegen-cli.jar generate ' +
          '-i ./swagger.yaml ' +
          '-l javascript ' +
          '-t javascript-templates ' +
          '-o javascript-generated/ ' +
          `--additional-properties useES6=false,usePromises=true,projectName=visma-sign-client,projectVersion=${JAVASCRIPT_VERSION}`
      },
      'javascript-bump-version': {
        command: 'npm version patch',
        options: {
          execOptions: {
            cwd: 'javascript-generated'
          }
        }
      },
      'javascript-push': {
        command : 'git add . && git commit -m "Generated javascript source" ; git push',
        options: {
          execOptions: {
            cwd: 'javascript-generated'
          }
        }
      },
      'javascript-publish': {
        command : 'npm publish',
        options: {
          execOptions: {
            cwd: 'javascript-generated'
          }
        }
      }
    },
    'javascript-package-update': {
      'javascript-package': {
        'fields': {
          "author": "Metatavu Oy",
          "repository": {
            "type": "git",
            "url": "git://github.com/Metatavu/visma-sign-client.git"
          },
          "license": "gpl-3.0"
        }
      }
    }
  });
  
  grunt.registerTask('download-dependencies', 'if-missing:curl:swagger-codegen');
  grunt.registerTask('javascript-gen', [ 'download-dependencies', 'shell:javascript-generate', 'javascript-package-update:javascript-package' ]);
  grunt.registerTask('javascript', [ 'javascript-gen', 'shell:javascript-bump-version', 'shell:javascript-push', 'shell:javascript-publish']);
  
  grunt.registerTask('default', ['javascript' ]);
  
};
