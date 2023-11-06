import { Calendar } from "../models/calendar.js";

export const createCalendarUser = async (req, res) => {
  try {
    let findUserInCalendarDB = await Calendar.findOne({ user: req.user._id });
    if (!findUserInCalendarDB) {
      const date = new Date();
      await Calendar.create({
        user: req.user._id,
        totalTasks: [
          {
            date: date.toDateString(),
            count: 0,
          },
        ],
      });
    }
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({
    success: true,
    message: "Created User calendar",
  });
};

export const AddFreq = async (req, res) => {
  try {
    let findCounter = await Calendar.findOne({ user: req.user._id });
    if (!findCounter) {
      return res.status(404).json({
        success: false,
        message: "No calendar entry found for the current date and user",
      });
    }
    const specificDate = new Date();

    const freq = findCounter.totalTasks.find(
      (task) => task.date === specificDate.toDateString()
    );
    
    if (freq) {
      freq.count = req.params.count;
      await findCounter.save();
      res.status(201).json({
        success: true,
        message: "Frequency Increased: " + freq.count,
      });
    }else{
      findCounter.totalTasks.push({
        date: specificDate.toDateString(),
        count: req.params.count,
      });
      await findCounter.save();
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCalendarData = async (req, res) => {
  try {
    let findUserProfile = await Calendar.findOne({ user: req.user._id });
    if (!findUserProfile) {
      return res.status(404).json({
        success: false,
        message: "No calendar entry found for the current date and user",
      });
    }

    const counterData = findUserProfile.totalTasks;

    res.status(201).json({
      success: true,
      counterData,
    });
  } catch (error) {
    console.log(error);
  }
};
