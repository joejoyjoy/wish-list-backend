const getAllAlbums = async (req, res) => {
    // Logic to get all albums
    res.status(200).send({ message: 'All albums found' });
}

const getAlbumById = async (req, res) => {
    const { id } = req.params;
    console.log(id);

    // Logic to get album by id
    res.status(200).send({ message: 'Album found by id' });
}

const createAlbum = async (req, res) => {
    // Logic to create album
    const body = req.body;
    console.log(body);

    res.status(200).send({ message: 'Album created' });
}

module.exports = {
    getAllAlbums,
    getAlbumById,
    createAlbum
}