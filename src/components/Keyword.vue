<template>
    <div class="keyword">
        <div class="keyword-input">
            <q-input
                autofocus
                bg-color="white"
                dense
                outlined
                placeholder="Type a keyword"
                v-bind:class="validationErrors.length > 0 ? 'has-error' : ''"
                v-bind:model-value="keyword"
                v-bind:error="validationErrors.length > 0"
                v-bind:error-message="validationErrors.join(', ')"
                v-on:update:modelValue="$emit('update', $event)"
            />
        </div>
        <q-btn
            class="keyword-btn"
            color="blue"
            v-bind:disable="index == 0"
            icon="ion-arrow-up"
            tabindex="-1"
            v-on:click="$emit('moveUp')"
        />
        <q-btn
            class="keyword-btn"
            color="blue"
            v-bind:disable="index == numKeywords - 1"
            icon="ion-arrow-down"
            tabindex="-1"
            v-on:click="$emit('moveDown')"
        />
        <q-btn
            class="keyword-btn"
            color="negative"
            dense
            icon="delete"
            tabindex="-1"
            title="Remove"
            v-on:click="$emit('removePressed')"
        />
    </div>
</template>

<script lang="ts">
import { byError, duplicateKeywordQueries, duplicateMatcher, keywordQueries } from 'src/error-filtering'
import { computed, defineComponent } from 'vue'
import { useValidation } from 'src/store/validation'

export default defineComponent({
    name: 'Keyword',
    props: {
        keyword: {
            type: String,
            default: ''
        },
        index: {
            type: Number,
            required: true
        },
        numKeywords: {
            type: Number,
            default: 0
        }
    },
    setup (props) {
        const { errors } = useValidation()
        const keywordErrors = computed(() => {
            return keywordQueries(props.index)
                .filter(byError(errors.value))
                .map(query => query.replace.message)
        })
        const duplicateErrors = computed(() => {
            return duplicateKeywordQueries
                .filter(byError(errors.value))
                .filter(byError(errors.value, duplicateMatcher(props.index)))
                .map(query => query.replace.message)
        })
        const validationErrors = computed(() => [...keywordErrors.value, ...duplicateErrors.value])
        return {
            validationErrors
        }
    },
    emits: ['moveDown', 'moveUp', 'removePressed', 'update']
})
</script>
<style scoped>
.keyword {
    display: flex;
    flex-direction: row;
    margin-bottom: 14px;
}
.keyword-input {
    flex-grow: 1.0;
}
.keyword-btn {
    height: 40px;
    margin-left: 10px;
    width: 40px;
}
</style>
