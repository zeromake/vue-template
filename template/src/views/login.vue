<template>
    <el-row type="flex" class="row-bg" justify="center">
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">登陆</el-button>
        </el-form-item>
    </el-form>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>
