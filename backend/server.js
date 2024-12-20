// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// // Initialize Express App
// const app = express();
// app.use(bodyParser.json());

// // MongoDB connection setup
// mongoose.connect('mongodb://localhost:27017/waste_management', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// // Waste Schema and Model
// const wasteSchema = new mongoose.Schema({
//     type: String,
//     quantity: Number,
//     status: { type: String, default: 'Pending' } // 'Pending' or 'Recycled'
// });

// const Waste = mongoose.model('Waste', wasteSchema);

// // Route to create waste
// app.post('/api/waste', async (req, res) => {
//     const { wasteType, quantity } = req.body;

//     const newWaste = new Waste({
//         type: wasteType,
//         quantity: quantity,
//     });

//     try {
//         const savedWaste = await newWaste.save();
//         res.status(201).json(savedWaste);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // Route to get all waste history
// app.get('/api/waste', async (req, res) => {
//     try {
//         const wastes = await Waste.find();
//         res.json(wastes);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // Route to recycle waste (Manufacturer interaction)
// app.post('/api/recycle/:id', async (req, res) => {
//     try {
//         const waste = await Waste.findByIdAndUpdate(req.params.id, { status: 'Recycled' }, { new: true });
//         if (!waste) {
//             return res.status(404).json({ message: 'Waste not found' });
//         }
//         res.json(waste);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS middleware

// Initialize Express App
const app = express();
app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());

// MongoDB connection setup
// v8V5ygdwgRqEGKOX
mongoose.connect('mongodb+srv://admin2:v8V5ygdwgRqEGKOX@cluster0.2cew4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Waste Schema and Model
const wasteSchema = new mongoose.Schema({
    type: String,
    quantity: Number,
    status: { type: String, default: 'Pending' } // 'Pending' or 'Recycled'
});

const Waste = mongoose.model('Waste', wasteSchema);

// Route to create waste
app.post('/api/createwaste', async (req, res) => {
    const { wasteType, quantity } = req.body;

    const newWaste = new Waste({
        type: wasteType,
        quantity: quantity,
    });

    try {
        const savedWaste = await newWaste.save();
        res.status(201).json(savedWaste);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.post('/api/createproduct', async (req, res) => {
    const { productType,wasteType,example } = req.body;

    const newWaste = new Waste({
        type: productType,
        type:wasteType

        // quantity: quantity,
    });

    try {
        const savedProduct = await newWaste.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to get all waste history
app.get('/api/waste', async (req, res) => {
    try {
        const wastes = await Waste.find();
        res.json(wastes);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to recycle waste (Manufacturer interaction)
app.post('/api/recycle/:id', async (req, res) => {
    try {
        const waste = await Waste.findByIdAndUpdate(req.params.id, { status: 'Recycled' }, { new: true });
        if (!waste) {
            return res.status(404).json({ message: 'Waste not found' });
        }
        res.json(waste);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
