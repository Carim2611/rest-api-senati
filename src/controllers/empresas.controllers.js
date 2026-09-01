import { pool } from '../db.js'

export const getEmpresas = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empresa')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}

export const getEmpresa = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empresa WHERE id = ?', [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Empresa no encontrado'
        })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}

export const createEmpresas = async(req, res) => {
    const { ruc, razon_social, ubicacion } = req.body
    try {
        const [rows] = await pool.query(
            'INSERT INTO empresa (ruc, razon_social, ubicacion) VALUES (?, ?, ?)', [ruc, razon_social, ubicacion]
        )
        res.send({
            id: rows.insertId,
            ruc,
            razon_social,
            ubicacion,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}
export const deleteEmpresas = async(req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM empresa WHERE id = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Empresa no encontrado'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}

export const updateEmpresas = async(req, res) => {
    const { id } = req.params
    const { ruc, razon_social, ubicacion } = req.body
    try {
        const [result] = await pool.query(
            `UPDATE empresa SET ruc = IFNULL(?, ruc), razon_social = IFNULL(?, razon_social),
            ubicacion = IFNULL(?, ubicacion) WHERE id = ?`, [ruc, razon_social, ubicacion, id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Empresa no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM profesor WHERE id = ?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}