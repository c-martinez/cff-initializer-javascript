/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, computed } from 'vue'
import yaml from 'js-yaml'

type IdentifierType = {
    type: 'doi' | 'url' | 'swh' | 'other',
    value: string,
    description?: string
}

type CFFType = 'software' | 'dataset'

type Keywords = Array<string>

interface CFF {
    'cff-version': string,
    commit?: string,
    date_released?: string,
    identifiers?: Array<IdentifierType>
    keywords?: Keywords,
    message?: string,
    repository?: string,
    repository_artifact?: string,
    repository_code?: string,
    title?: string,
    type: CFFType,
    url?: string,
    version?: string
}

const cff = ref<CFF>({
    'cff-version': '1.2.0',
    type: 'software',
    // this is just sample data that can be removed once we implement data binding for identifiers
    identifiers: [
        {
            type: 'doi',
            value: '10.0000/FIXME',
            description: 'This is the description of the DOI'
        },
        {
            type: 'swh',
            value: 'some swh identifier'
        },
        {
            type: 'url',
            value: 'https://github.com/citation-file-format/cffinit',
            description: 'This is the description of the URL'
        },
        {
            type: 'other',
            value: 'custom identifiers',
            description: 'This is the description of the custom identifier'
        }
    ],
    keywords: [
        'first keyword',
        'second keyword',
        'third'
    ]
})

export function useCFF () {
    return {
        asYAML: computed(() => {
            return yaml.dump(cff.value, {
                replacer: hideEmptyKeys
            })
        }),
        cff: computed(() => cff.value),
        commit: computed(() => cff.value.commit),
        date_released: computed(() => cff.value.date_released),
        identifiers: computed(() => cff.value.identifiers),
        keywords: computed(() => cff.value.keywords),
        message: computed(() => cff.value.message),
        repository: computed(() => cff.value.repository),
        repository_artifact: computed(() => cff.value.repository_artifact),
        repository_code: computed(() => cff.value.repository_code),
        title: computed(() => cff.value.title),
        type: computed(() => cff.value.type),
        url: computed(() => cff.value.url),
        version: computed(() => cff.value.version),
        setCommit: (newCommit: string) => { cff.value.commit = newCommit },
        setDateReleased: (newDateReleased: string) => { cff.value.date_released = newDateReleased },
        setIdentifiers: (newIdentifiers: Array<any>) => { cff.value.identifiers = newIdentifiers },
        setKeywords: (newKeywords: Keywords) => { cff.value.keywords = newKeywords },
        setMessage: (newMessage: string) => { cff.value.message = newMessage },
        setRepository: (newRepository: string) => { cff.value.repository = newRepository },
        setRepositoryArtifact: (newRepositoryArtifact: string) => { cff.value.repository_artifact = newRepositoryArtifact },
        setRepositoryCode: (newRepositoryCode: string) => { cff.value.repository_code = newRepositoryCode },
        setTitle: (newTitle: string) => { cff.value.title = newTitle },
        setType: (newType: CFFType) => { cff.value.type = newType },
        setUrl: (newUrl: string) => { cff.value.url = newUrl },
        setVersion: (newVersion: string) => { cff.value.version = newVersion }
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hideEmptyKeys = (key: string, value: any) => {
    console.log('hideEmptyKeys: ', key, value)
    if (value === '') {
        return undefined
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value
}
