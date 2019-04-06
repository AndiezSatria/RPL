let data = [
    {
        nim : '6706284028',
        nama : 'Andiez',
        kelas : 'D3RPLA-42-01'
    },
    {
        nim : '6706284001',
        nama : 'Maulana',
        kelas : 'D3RPLA-42-01'
    },
    {
        nim : '6706284002',
        nama : 'Delta',
        kelas : 'D3RPLA-42-01'
    }
]

exports.getmhs = (req, res) => {
    res.send(data)
}

exports.postmhs = (req, res) => {
    let mahasiswa = {
        nim : req.body.nim,
        nama : req.body.nama,
        kelas : req.body.kelas
    }
    data.push(mahasiswa)
    res.send(data)
}

exports.updatemhs = (req, res) => {
    let update_mhs = {
        nim : req.body.nim,
        nama : req.body.nama,
        kelas : req.body.kelas
    }
    
    data.splice(req.params.index, 1, update_mhs)
    res.send(data)
}

exports.deletemhs = (req, res) => {
    data.splice(req.params.index, 1)
    res.send(data)
}

exports.getmhsidx = (req, res) => {
    res.send(data[req.params.index])
}