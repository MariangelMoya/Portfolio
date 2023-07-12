import {reactive} from "vue";
import type {UnwrapNestedRefs} from "@vue/reactivity";
// @ts-ignore
import {assign} from "lodash" //esto es la interfaz que regresa reactive


//Record es una funcion para que una serie de elementos devuelvan lo mismo en un objeto,
// en este caso la llave de cada uno y su array de string
//<D> es una generic quiere decir que puede recibir cualquier cosa,
// dentro de esos diamantes puedo usar cualquier palabra o letra no solo D.
// Cuando creo una interfaz con un <> quiere decir que le voy a pasar una o varias generic
//las generic permiten que pase cualquier dato
interface Errors<D> {
    errors: Record<keyof D, string[]>
}

export type CompleteForm<D> = UnwrapNestedRefs<Errors<D> & D & {
    reset: () => void
}>


// reactive retorna como interfaz UnwrapNestedRefs con adentro los datos
function useForm<D extends object>(data: D): CompleteForm<D> {
    const form = reactive({
        ...data,
        errors: {} as any,
        reset: () => {
            assign(form, data)
            form.errors = {}
        }
    })

    return form
}

export default useForm