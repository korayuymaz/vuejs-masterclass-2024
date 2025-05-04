import type { CustomError, ExtendedPostgrestError } from "@/types/Error"

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | CustomError | ExtendedPostgrestError>(null)

  const setError = ({error, customCode}: {error:string | ExtendedPostgrestError, customCode:number}) => {
    if(typeof error === 'string') {
      activeError.value = Error(error)
      activeError.value.customCode = customCode 
      return
    }
    activeError.value = error
    activeError.value.statusCode = customCode

  }

  return {
    activeError,
    setError,
  }
})
  