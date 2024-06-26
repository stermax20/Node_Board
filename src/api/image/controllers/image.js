exports.updateMemoImage = async (req, res, prisma) => {
    const memoId = parseInt(req.params.id);

    let imagePath = null;

    if (req.file) {
        imagePath = `/uploads/${req.file.filename}`;
    }

    try {
        const updatedMemo = await prisma.memo.update({
            where: {
                id: memoId,
            },
            data: {
                image: imagePath,
            },
        });

        res.json({ message: 'Image updated', updatedMemo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 500, error: 'Internal server error' });
    }
};