<template>
    <section class="container safelock">
        <div class="row">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div class="card bg--grey-light py-2">
                    <div class="display bg--blue my-5 position-relative">
                        <p class="display__status ">
                            <span v-if="isLocked">Locked</span>
                            <span v-else>Unlocked</span>
                        </p>
                        <p class="display__message text-right position-absolute">
                            <span v-if="passcode"> {{passcode}} </span>
                            <span v-else>{{message}}</span> 
                        </p>
                    </div>
                    <div class="keyboard row px-3">
                        <div v-for="(key, index) in keyList" :key="index" class="col-4 mb-3 px-3" >
                            <p class="key text-center bg--grey " @click="passcodeEnter(key)">
                                {{key}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Hero',
    data() {
        return {
            isLocked: false,
            message: 'Ready',
            keyList: [
                '7', '8', '9', '4', '5', '6', '1', '2', '3', '*', '0', 'L' 
            ],
            passcode: '',
            tmpLength: null,
            passcodeSafe: null
        }
    },

    methods: {
        passcodeEnter(number) {
            if(this.isLocked) {
                
                this.passcode += number;
                this.tmpLength = this.passcode.length;
                setTimeout(this.passcodeLock, 1200 ,this.tmpLength );
                
                
            }else {  
                this.passcode += number;
                this.tmpLength = this.passcode.length;

                setTimeout(this.passcodeVerify, 1200 ,this.tmpLength );
            }
        },

        passcodeVerify(tmpLength) {

            if(this.passcode.length === tmpLength & this.passcode.length !== 4) {
                this.message = "Error";
                this.passcode = '';
            }else {
                this.passcodeSafe = this.passcode;
                this.isLocked = true;
                this.message = "Ready";
                this.passcode = '';
            }   
        },

        passcodeLock () {
            
            if(this.passcode === this.passcodeSafe) {
                this.isLocked = true;
                this.message = "Ready";
                this.passcode = '';
            }else {
                this.isLocked = false;
                this.message = "Error";
                this.passcode = '';
            }
        }
    }
};
</script>
