const knex = require("../knexmodels/knex");

const createSiswa = async (req, res) => {
    const {nis, namaSisw, tanggalLahir, jenisKelamin} = req.body

    if (!nis || !namaSisw || !tanggalLahir || !jenisKelamin){
        return res.status(400).send({
            message: "Input data field, field must not empty"
        })
    }

    const create = await knex('siswas').insert({
        nis: nis,
        namaSisw: namaSisw,
        tanggalLahir: tanggalLahir,
        jenisKelamin: jenisKelamin
    })

    return res.status(201).send({
        message: "Create siswa succes"
    })
}

const readAllSiswa = async (req, res) => {
    const allSiswa = await knex.select().from('siswas')

    return res.status(200).send({
        message: "All siswa data",
        data: allSiswa
    })
}

const udateSiswa = async (req, res) => {
    try {
        const body = req.body

        const updated = await knex('siswas').where({
            nis: body.nis
        }).update({
            namaSisw: body.namaSisw,
            tanggalLahir: body.tanggalLahir,
            jenisKelamin: body.jenisKelamin
        })

        if (!updated) return res.status(404).send({
            message: 'data not found, update failed'
        })

        return res.status(201).send({
            message: 'Update success'
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).send('internal server error')
    }
}

const deleteSiswa = async (req, res) => {
    try {
        const body = req.body

        const deleted = await knex('siswas').where({
            nis: body.nis
        }).del()

        if (!deleted) return res.status(404).send({
            message: 'data not found, delete failed'
        })

        return res.status(201).send({
            message: 'Delete success'
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).send('internal server error')
    }
}

module.exports = {createSiswa, readAllSiswa, udateSiswa, deleteSiswa}