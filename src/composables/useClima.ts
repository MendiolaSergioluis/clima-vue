import axios from 'axios';
import {computed, ref} from 'vue'
import { type Ref } from 'vue'
import type {Busqueda} from '@/helpers/Types';

export default function useClima() {

    const clima: Ref<Object> = ref({})
    const cargando: Ref<boolean> = ref(false)
    const error: Ref<string> = ref('')

    const obtenerClima = async (busqueda: Busqueda): Promise<void> => {
        cargando.value = true
        // Importar la API Key
        const {ciudad: cityName, pais: countryCode} = busqueda
        const limit: string = '1'
        const key: string = import.meta.env['VITE_API_KEY']

        // Obtener la lat, lon
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&limit=${limit}&appid=${key}`
        try {
            const {data} = await axios(url)
            if (data.length == 0) {
                error.value = 'Ciudad no encontrada'
                setTimeout(() => {
                    error.value = ''
                }, 3000)
            } else {
                const {lat, lon} = data[0]
                // Obtener el clima
                const urlClima: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
                const {data: resultado} = await axios(urlClima)
                clima.value = resultado
            }
        } catch (error) {
            console.log(error)
        } finally {
            cargando.value = false
        }

    }

    const mostrarClima = computed((): boolean => {
        return Object.values(clima.value).length > 0
    })

    const formatearTemperatura = (temperatura: string): string => (parseInt(temperatura) - 273.15).toFixed(1)


    return {
        obtenerClima,
        cargando,
        error,
        clima,
        mostrarClima,
        formatearTemperatura
    }
}