<template>
    <div class="dropzone"
         v-on:click="openFileSelection"
         v-on:dragover="onDragOver"
         v-on:dragleave="onDragLeave"
         v-on:drop="onDrop"
         v-bind:class="{hightlight: hightlight, disabled: !enabled}"
    >
        <div>Add files</div>
        <input ref="fileInput"
               class="file-input"
               type="file"
               multiple
               v-on:change="onFileChanged"/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class DropZone extends Vue {
        @Prop({default: true})
        private enabled!: boolean;
        private hightlight = false;

        public openFileSelection(): void {
            if (!this.enabled) {
                return;
            }
            (this.$refs.fileInput as HTMLElement).click();
        }

        public onDragOver(event: DragEvent): void {
            if (!this.enabled) {
                return;
            }
            event.preventDefault();
            this.hightlight = true;
        }

        public onDragLeave(event: DragEvent): void {
            this.hightlight = false;
        }

        public onDrop(event: DragEvent): void {
            if (!this.enabled) {
                return;
            }
            event.preventDefault();
            if (event && event.dataTransfer && event.dataTransfer.files) {
                const files = event.dataTransfer.files;
                const result: File[] = [];
                for (let i = 0; i < files.length; i++) {
                    result.push(files.item(i) as File);
                }
                this.$emit('filesAdded', result);
                this.hightlight = false;
            }
        }

        public onFileChanged(event: any) {
            const files: FileList = event.target.files;
            const result: File[] = [];
            for (let i = 0; i < files.length; i++) {
                result.push(files.item(i) as File);
            }
            this.$emit('filesAdded', result);
        }


    }
</script>

<style scoped>
    .dropzone {
        position: relative;
        border: 3px dashed #42b983;
        color: #42b983;
        font: bold 24px/200px arial;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
    }

    .hightlight {
        background-color: #b3dbc9;
    }

    .disabled {
        border: 3px dashed grey;
        color: grey;
    }

    .file-input {
        display: none;
    }
</style>