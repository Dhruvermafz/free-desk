const Transaction = require("../models/transaction");

// Create a new transaction
exports.createTransaction = async (req, res) => {
  try {
    const { projectId, freelancerId, amount } = req.body;

    const transaction = new Transaction({
      project: projectId,
      freelancer: freelancerId,
      client: req.user.id,
      amount,
    });

    await transaction.save();
    res.status(201).json({ message: "Transaction initiated", transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Complete a transaction
exports.completeTransaction = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const transaction = await Transaction.findById(transactionId);
    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });

    transaction.status = "completed";
    await transaction.save();

    res.json({ message: "Transaction completed successfully", transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
