export interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  videos?: string[]
  reportLink?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Object Manipulation in Musculoskeletal Simulations using RL",
    shortDescription: "Trained Musculoskeletal arm model for object manipulation in MuJoCo using PPO and SAC",
    fullDescription: `
      <h3>Project Overview</h3>
      <p>The project involves training a virtual musculoskeletal arm model to perform hand manipulation tasks.</p>
      <ul>
        <li>Simulation was performed using the MuJoCo simulator and MyoSuite's Relocation environment.</li>
        <li>The task required the arm model to grasp, lift, and place an object into a designated target box.</li>
        <li>I chose PPO algorithm as it provides stable training in continuous control tasks.</li>
        <li>Initially I used MyoSuite's default reward structure, then optimized it with:
          <ul>
            <li>Custom intermediate rewards and penalties.</li>
            <li>Fine-tuned Hyperparameter to improve the training process.</li>
          </ul>
        </li>
      </ul>
      <h3>Training</h3>
      <h4>1. Training with Default Settings</h4>
      <p>The initial training phase used the default reward structure and PPO hyperparameters:</p>
      <ul>
        <li>Initially, the agent explored all possible states which leads to high rewards and increased training time.</li>
        <li>Default reward structure are shown below.</li>
      </ul>
      <p>Initial Results Limitations:</p>
      <ul>
        <li>After more than a million timesteps, the value loss decreases slowly, while the policy loss remains erratic and stabilizes gradually. The reward curve shows slow improvement.</li>
        <li>Overall rewards are improving but still negative due to the complexity of controlling a musculoskeletal system with many degrees of freedom (DOFs).</li>
        <li>Occasionally, there are spikes in negative rewards as the agent explores new states.</li>
      </ul>
      <h4>2. Training with Custom Rewards and Tuned Hyperparameters</h4>
      <p>To overcome the limitations of default settings, the following adjustments were made:</p>
      <ul>
        <li>Introduced a custom reward structure to provide intermediate feedback, which:
          <ul>
            <li>Encouraged desired behaviors.</li>
            <li>Penalized undesired actions.</li>
          </ul>
        </li>
        <li>Tuned hyperparameters for:
          <ul>
            <li>Faster convergence.</li>
            <li>Stable training updates.</li>
          </ul>
        </li>
      </ul>
      <h3>Final Results</h3>
      <ul>
        <li>After final training, the decrease in the Value loss curve is much smoother compared to the earlier plots.</li>
        <li>The Policy loss curve is stable and gradually decreased, which shows improvement in training.</li>
        <li>The rewards curve shows positive rewards.</li>
      </ul>
    `,
    technologies: ["Reinforcement Learning", "MuJoCo", "MyoSuite"],
    reportLink: "#",
  },
  {
    id: 2,
    title: "Autonomous Driving Using CARLA Simulator",
    shortDescription:
      "Implemented imitation and reinforcement learning for autonomous vehicle control in CARLA Simulator.",
    fullDescription: `
      <p>This project focused on implementing imitation and reinforcement learning techniques for autonomous vehicle control in the CARLA Simulator. This project aimed to develop and compare different approaches for training autonomous vehicles to navigate complex urban environments.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Utilized the CARLA Simulator for realistic urban driving scenarios</li>
        <li>Implemented imitation learning to mimic expert driving behavior</li>
        <li>Developed a Deep Q-Learning algorithm for reinforcement learning</li>
        <li>Compared the performance of imitation learning and reinforcement learning approaches</li>
        <li>Evaluated the autonomous vehicle's ability to navigate traffic, follow traffic rules, and handle various weather conditions</li>
      </ul>
    `,
    technologies: [
      "Machine Learning",
      "Autonomous Vehicles",
      "CARLA Simulator",
      "Deep Q-Learning",
      "Imitation Learning",
    ],
    videos: ["https://www.youtube.com/embed/video1", "https://www.youtube.com/embed/video2"],
  },
  {
    id: 3,
    title: "Wrist Rehabilitation Sleeve with Gamification",
    shortDescription: "Designed a gamified robotic glove for wrist rehabilitation using Pygame.",
    fullDescription: `
      <h3>Motivation</h3>
      <p>About 15 million people experience strokes annually, making it a leading cause of death and disability. Traditional physical therapy for stroke recovery often leads to therapist fatigue and high costs, with robotic-assisted therapy reaching up to $70,000 per year. Recent studies suggest that robotic technology can improve recovery for hand impairments and reduce therapist workloads. Integrating gamification into rehabilitation also boosts patient motivation and outcomes, often matching or exceeding traditional methods.</p>
      <h3>Project Overview</h3>
      <p>Two peers and I designed and developed a low-cost robotic sleeve for wrist rehabilitation. The sleeve facilitates movement in four directions: abduction, adduction, extension, and flexion. To enhance patient engagement, we created a game where patients catch virtual spheres using their wrist movements. The spheres appear on screen within the patient's range of motion, allowing for customization to meet individual patient needs. Patients can track missed and total scores, motivating them to catch as many spheres as possible to enhance their rehabilitation. Therapists can customize the game with unique patterns for patients to follow, focusing on accuracy or speed, while also tracking their progress over time.</p>
      <h3>Design</h3>
      <h4>System Overview</h4>
      <ul>
        <li><strong>IMUs:</strong>
          <ul>
            <li>Two IMUs are used: one on the wrist base (stationary) as a reference point, and the other on the knuckles to track wrist movement.</li>
            <li>The IMUs measure yaw (adduction & abduction) and pitch (flexion & extension), with the knuckle IMU's motion interpreted relative to the base IMU for accurate tracking.</li>
            <li>IMU data updates the virtual hand's position on the screen, providing real-time feedback on wrist movement and sphere alignment.</li>
            <li>Real-time IMU data is also sent to the Arduino for motor control, enabling precise wrist guidance.</li>
          </ul>
        </li>
        <li><strong>Arduino:</strong>
          <ul>
            <li>An Arduino UNO serves as the central controller.</li>
            <li>It processes real-time IMU data, sends commands to the stepper motors, and interfaces with a rehabilitation game.</li>
          </ul>
        </li>
        <li><strong>Motor & Driver:</strong>
          <ul>
            <li>Motion is driven by stepper motors controlled via ULN2003 motor drivers.</li>
            <li>The system enables precise flexion/extension and abduction/adduction movements.</li>
          </ul>
        </li>
        <li><strong>Elastic Bands:</strong>
          <ul>
            <li>Elastic bands are used to return the wrist to its neutral position after the motors release tension.</li>
          </ul>
        </li>
      </ul>
    `,
    technologies: ["Rehabilitation Robotics", "Pygame", "Arduino", "IMU"],
    reportLink: "#",
  },
  {
    id: 4,
    title: "Seven Segment Display with Robot Formation of Six Robots",
    shortDescription:
      "Developed a six-robot system to mimic seven segment displays, aiming for multi-robot coordination and localization.",
    fullDescription: `
      <p>This project focused on developing a multi-robot system that mimics the behavior of a seven-segment display. The goal was to explore and implement techniques for robot coordination, localization, and formation control.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Designed and built a system of six robots capable of forming different numerical digits</li>
        <li>Implemented algorithms for multi-robot coordination and communication</li>
        <li>Developed localization techniques to ensure accurate positioning of each robot</li>
        <li>Created a control system for managing the formation and movement of the robot swarm</li>
        <li>Explored challenges in swarm robotics and distributed systems</li>
      </ul>
    `,
    technologies: ["Swarm Robotics", "Control Systems", "Multi-robot Coordination", "Localization"],
  },
  {
    id: 5,
    title: "Soft Robotic Snake Limb",
    shortDescription:
      "Designed and Fabricated a bio-inspired robotic snake Limb using soft materials and pneumatic control.",
    fullDescription: `
      <h3>Project Overview</h3>
      <p>My peers and I developed a soft robotic snake limb that can move effectively in unstructured environments due to its flexibility and biomimetic design. We created a trapezoidal pneunet structure to enhance stability and adaptability.</p>
      <h3>Design and Fabrication</h3>
      <ul>
        <li>Designed CAD molds using SolidWorks and then 3D printed these molds with PLA</li>
        <li>Chose Dragon Skin 10 silicone for making the actuators due to its flexibility and stiffness</li>
        <li>Each robot limb has three actuators, requiring six fabricated molds in total</li>
        <li>Designed a push notch to secure the actuators</li>
        <li>The robot is fully pneumatically actuated</li>
        <li>The front limb is equipped with a granular gripper made from a rubber balloon filled with coffee beans, which is also pneumatically actuated to enable object grasping</li>
      </ul>
      <h3>Testing and Analysis</h3>
      <ul>
        <li>Conducted mechanical testing on one of the actuators</li>
        <li>Performed finite element analysis to understand the behavior of the soft structure</li>
      </ul>
      <h3>Results</h3>
      <p>Our mechanical testing showed that as pressure increases, the strain also increases. Additionally, we found that as the volume of air increases, the force exerted by the actuator limb also increases.</p>
      <h3>Challenges</h3>
      <ul>
        <li>The initial circular pneunet structure had stability issues, leading to a redesign into a trapezoidal shape for greater robustness</li>
        <li>Air bubbles often appeared when casting Dragon Skin 10 silicone, requiring careful fabrication techniques</li>
      </ul>
    `,
    technologies: [
      "Soft Robotics",
      "Mechanical Design",
      "Mechanical Testing",
      "Granular Jamming",
      "Pneumatic Control",
      "Finite-Element Analysis",
    ],
  },
  {
    id: 6,
    title: "FlexAssist: Vision-Controlled Soft Robotic Glove for Assisted Grasping",
    shortDescription:
      "Designed a vision-controlled soft robotic glove to assist individuals with partial motor loss in grasping tasks.",
    fullDescription: `
      <p>FlexAssist is an innovative project aimed at developing a vision-controlled soft robotic glove to assist individuals with partial motor loss in performing grasping tasks. This project combines elements of computer vision, soft robotics, and assistive technology to create a user-friendly and effective solution for improving quality of life.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Soft robotic glove design for comfortable and safe interaction with the user's hand</li>
        <li>Computer vision system for object detection and classification</li>
        <li>Integration of vision system with glove control for automated grasping assistance</li>
        <li>Customizable grasping patterns for different object types and user needs</li>
        <li>User interface for easy control and monitoring of the glove's operations</li>
      </ul>
      <h3>Technical Details:</h3>
      <ul>
        <li>Utilized soft pneumatic actuators for finger movement</li>
        <li>Implemented object detection using deep learning models (e.g., YOLO or SSD)</li>
        <li>Developed a control system to translate visual information into appropriate glove actuation</li>
        <li>Created a modular design for easy maintenance and upgrades</li>
      </ul>
    `,
    technologies: ["Rehabilitation Soft Robotic Glove", "Computer Vision", "Deep Learning", "Pneumatic Control"],
  },
  {
    id: 7,
    title: "Human Detecting Quadcopter",
    shortDescription: "Developed a low-cost Quadcopter for real-time detection of humans",
    fullDescription: `
      <p>This project involved the development of a low-cost quadcopter equipped with real-time human detection capabilities. The goal was to create an affordable and efficient aerial platform for various applications such as search and rescue, surveillance, and crowd monitoring.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Custom-designed quadcopter frame optimized for payload capacity and flight stability</li>
        <li>Integration of a lightweight camera system for real-time video feed</li>
        <li>Implementation of computer vision algorithms for human detection</li>
        <li>Development of a user-friendly ground control station for monitoring and control</li>
        <li>Optimization of power consumption for extended flight time</li>
      </ul>
      <h3>Technical Details:</h3>
      <ul>
        <li>Utilized open-source flight controller firmware (e.g., ArduPilot or PX4) for reliable flight control</li>
        <li>Implemented human detection using deep learning models optimized for edge devices</li>
        <li>Developed a custom communication protocol for efficient data transfer between the quadcopter and ground station</li>
        <li>Created a modular software architecture for easy integration of additional features</li>
      </ul>
    `,
    technologies: ["Computer Vision", "Deep Learning", "Embedded Systems"],
  },
  {
    id: 8,
    title: "Gesture Controlled Robotic Car",
    shortDescription: "Engineered a glove-operated robotic vehicle",
    fullDescription: `
      <p>This project involved the development of a robotic car controlled by hand gestures using a specially designed glove. The goal was to create an intuitive and hands-free method of controlling a robotic vehicle, potentially useful in various applications such as assistive technology or remote operations in hazardous environments.</p>
      <h3>Key Components:</h3>
      <ul>
        <li>Gesture-recognition glove with integrated sensors (e.g., accelerometers, gyroscopes)</li>
        <li>Robotic car platform with motor control system</li>
        <li>Wireless communication system for transmitting gesture data</li>
        <li>Microcontroller for processing sensor data and controlling the car</li>
      </ul>
      <h3>Technical Details:</h3>
      <ul>
        <li>Utilized Arduino or similar microcontroller platforms for both the glove and car</li>
        <li>Implemented gesture recognition algorithms to interpret hand movements</li>
        <li>Developed a robust wireless communication protocol (e.g., using HC-05 Bluetooth modules)</li>
        <li>Created a responsive motor control system for smooth and accurate car movements</li>
        <li>Designed and implemented custom PCBs for compact and efficient circuitry</li>
      </ul>
      <h3>Key Achievements:</h3>
      <ul>
        <li>Successfully paired HC-05 Bluetooth modules for reliable communication</li>
        <li>Achieved intuitive control of the robotic car through various hand gestures</li>
        <li>Optimized the system for low latency and responsive operation</li>
        <li>Implemented fail-safe mechanisms for safety in case of communication loss</li>
      </ul>
    `,
    technologies: ["Control Systems", "Wireless Communication", "Gesture Recognition"],
  },
]

export default projects

