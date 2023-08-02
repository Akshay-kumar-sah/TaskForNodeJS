const express = require('express');
const domainController = require('../Controllers/domainController');

const router = express.Router();

// Route to trigger domain extraction and storage
router.post('/extract', async (req, res) => {
  try {
    await domainController.extractAndStoreDomainData();
    res.status(200).json({ message: 'Extraction and storage completed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred during extraction and storage' });
  }
});

module.exports = router;
