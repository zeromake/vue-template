module.exports = {
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "A Vue.js and project"
        },
        "author": {
            "type": "string",
            "message": "Author"
        },
        "version": {
            "type": "string",
            "required": false,
            "message": "version",
            "default": "1.0.0"
        },
        "build": {
            "type": "list",
            "message": "Vue build",
            "choices": [
                {
                    "name": "Runtime + Compiler",
                    "value": "standalone",
                    "short": "standalone"
                },
                {
                    "name": "Runtime",
                    "value": "runtime",
                    "short": "runtime"
                }
            ]
        },
        "lint": {
            "type": "confirm",
            "message": "Use ESLint to lint your code?"
        }
    },
    "filters": {
        ".eslintrc.js": "lint",
        ".eslintignore": "lint"
    }
}
