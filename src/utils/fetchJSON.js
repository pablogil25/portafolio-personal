/**
 * Obtiene cualquier archivo JSON del proyecto.
 * @param {string} path - Ruta del archivo JSON.
 * @returns {Promise<Object>}
 */

export async function fetchJSON(path) {
    try {
        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`No fue posible cargar: ${path}`);
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return null;

    }
}