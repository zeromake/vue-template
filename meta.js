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
				}
    }
}
