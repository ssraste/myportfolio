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
    title: "Object Manipulation in Musculoskeletal Simulations using Reinforcement Learning",
    shortDescription: "Trained Musculoskeletal arm model for object manipulation in MuJoCo using PPO and SAC",
    fullDescription: `
      <h3 style="text-align: center;"><strong>Project Overview</strong></h3>
      <p>In this project, I trained a virtual musculoskeletal arm model to perform hand manipulation pick and place task. The arm model should grasp, lift, and place an object into a designated target box. I used <strong> MuJoCo simulator </strong>and <strong> MyoSuite's </strong> Relocation environment.
        For this, I used <strong> Proximal Policy Optimization </strong>algorithm as it provides stable training in continuous control tasks. </p>
      <p> Initially I used MyoSuite's default reward structure, then optimized it with <strong> Custom intermediate rewards and penalties </strong> to improve the training time and later <strong> fine-tuned Hyperparameter</strong> to get higher and stable rewards.</p>
      <img src="myo poses.png" alt="poses" width="550" style="display: block; margin: auto;">
      \b
      <h3 style="text-align: center;"><strong>Training</strong></h3>
      <h4>1. Training with Default Settings</h4>
      <p>Defualt setting had default reward structure and PPO hyperparameters, due to which the agent explored all possible states which leads to high rewards and increased training time. 
       <img src="myo default reward table.png" alt="defaultreward" width="280" style="display: block; margin: auto;">
       <img src="myo default rewards.png" alt="defaultreward" width="550" style="display: block; margin: auto;">
       <video width="510" height="360" controls autoplay muted loop style="display: block; margin: auto;">
        <source src="myoinitial.mp4" type="video/mp4">
         Your browser does not support the video tag.
       </video>
      </p>
      \b
      <p><strong> Limitations: </strong>
       After more than a million timesteps, the value loss decreases slowly, while the policy loss remains erratic and stabilizes gradually. The reward curve shows slow improvement. 
       The Overall rewards are improving but still negative due to the complexity of controlling a musculoskeletal system with many degrees of freedom (DOFs). 
       Occasionally, there are spikes in negative rewards as the agent explores new states.
      </p>
      \b
      <p>
      <h4>2. Training with Custom Rewards and Tuned Hyperparameters</h4>
      <p>To overcome the limitations of default settings, I introduced a custom reward structure to provide intermediate feedback, which encouraged desired behaviors and Penalized undesired actions. Later, I also fine-tuned the hyperparameters for stable updates. </p>
        <img src="myo custom rewards table.png" alt="customreward" width="420" style="display: block; margin: auto;">

        <video width="510" height="360" controls autoplay muted loop style="display: block; margin: auto;">
        <source src="myo_finaltraining.mp4" type="video/mp4">
         Your browser does not support the video tag.
       </video>

      <img src="myo 0.0004128.png" alt="finalresult" width="450" style="display: block; margin: auto;">
      <h3 style="text-align: center;"><strong>Final Results</strong></h3>
      <p> After 2 million timesteps, we can see that the decrease in the Value loss curve is much smoother compared to the earlier plots. The Policy loss curve is stable and gradually decreased, which shows improvement in training and the rewards curve shows positive rewards.</p>
      </p>

    `,
    technologies: ["Reinforcement Learning", "MuJoCo", "MyoSuite"],
    reportLink: "/myosuite_Report.pdf",
  },
  {
    id: 2,
    title: "Autonomous Driving Using CARLA Simulator",
    shortDescription:
      "Implemented Deep Learning and Modular Control for autonomous vehicles in CARLA.",
    fullDescription: `

      <p>This project focuses on implementing <strong> Imitation Learning </strong> & <strong> Reinforcement Learning </strong> techniques for autonomous vehicle control in the CARLA Simulator. I also created a <strong> Modular Control Pipeline </strong> including Lane Detection technique, Path planning using Way-point prediction and Controllers (PID & Stanley).</p>
      <p> I used <strong>CARLA simulator </strong> with dynamic weather conditions and spawned pedestrains to create real-word scenarios. </p>
      \b 
      <h3 style="text-align: center;"><strong>Agent Data Collection & Imitation Learning</strong></h3> 
      \b
        <div style="display: flex; justify-content: flex-start; align-items: center; gap: 20px;">
           <img src="carla.png" alt="wrist.jpg" width="350" style="display: block;">
          <div>
            <p> I created a control agent and collected the driving data. Using this dataset, I trained the control agent to imitate driving by applying a neural network for imitation learning, aiming to replicate expert demonstrations. </p>
            \b
            <p><strong> Limitation: </strong> Unable to adapt to situations where a pedestrian suddenly appeared in front of the vehicle.</p>
          </div> 
       </div>
\b
      <h3 style="text-align: center;"><strong>Deep Q-Learning</strong></h3> 
      \b
       <div style="display: flex; justify-content: flex-start; align-items: center; gap: 20px;">
         <img src="carlarl.png" alt="carlarl.png" width="350" style="display: block;">
          <div>
            <p> -----
         </div>
        </div>

\b
       <div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
         <div style="text-align: center;">
           <h5>Without Collision Penalties</h5>
           <video width="600" height="1050" controls autoplay muted loop style="display: block; margin: auto;">
              <source src="carlacollision.mp4" type="video/mp4">
              Your browser does not support the video tag.
           </video>
          </div>
          <div style="text-align: center;">
            <h5>With Collision Penalties</h5>
            <video width="600" height="1050" controls autoplay muted loop style="display: block; margin: auto;">
              <source src="carlacollision2.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
           </div> 
        </div>

    `,
    technologies: [
      "Autonomous Vehicles",
      "CARLA Simulator",
      "Deep Q-Learning",
      "Imitation Learning",
    ],
  },
  {
    id: 3,
    title: "Wrist Rehabilitation Sleeve with Gamification",
    shortDescription: "Designed a wrist glove with gamified rehabilitation using Pygame.",
    fullDescription: `
      <h3 style="text-align: center;"><strong>Motivation</strong></h3>
      <p>Traditional stroke recovery therapy can lead to therapist fatigue and high costs. However, robotic-assisted treatment has shown promise in improving recovery for hand impairments and reducing therapist workloads. Gamification in rehabilitation boosts patient motivation and outcomes, often exceeding traditional methods.</p>
     \b
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 1px;">
      <img src="wrist design.png" alt="wrist design" width="300" style="display: block;">
      <img src="wrist.jpg" alt="wrist.jpg" width="400" style="display: block;">
    </div>
      \b
      <h3 style="text-align: center;"><strong>Project Overview</strong></h3>
      <p>Two peers and I designed and developed a low-cost robotic sleeve for wrist rehabilitation. The sleeve facilitates movement in four directions: abduction, adduction, extension, and flexion. To enhance patient engagement, we created a game where patients catch virtual spheres using their wrist movements. The spheres appear on screen within the patient's range of motion, allowing for customization to meet individual patient needs. Patients can track missed and total scores, motivating them to catch as many spheres as possible to enhance their rehabilitation. Therapists can customize the game with unique patterns for patients to follow, focusing on accuracy or speed, while also tracking their progress over time.</p>
      \b
      <h3 style="text-align: center;"><strong>System Overview</strong></h3>
      <ul>
        <li><strong>1. IMUs:</strong>
          <ul>
            <li>- Two IMUs are used: one on the wrist base as a reference point, and the other on the knuckles to track wrist movement.</li>
            <li>- The IMUs measure yaw (adduction & abduction) and pitch (flexion & extension), with the knuckle IMU's motion interpreted relative to the base IMU for accurate tracking.</li>
            <li>- IMU data updates the virtual hand's position on the screen, providing real-time feedback on wrist movement and sphere alignment.</li>
            <li>- Real-time IMU data is also sent to the Arduino for motor control, enabling precise wrist guidance.</li>
          </ul>
        </li>
        <li><strong>2. Arduino:</strong>
          <ul>
            - Arduino UNO processes real-time IMU data, sends commands to the stepper motors, and interfaces with a rehabilitation game.</li>
          </ul>
        </li>
        <li><strong>3. Motor & Driver:</strong>
          <ul>
            <li>- Motion is driven by stepper motors controlled via ULN2003 motor drivers which enables precise flexion/extension and abduction/adduction movements.</li>
          </ul>
        </li>
        <li><strong>4. Elastic Bands:</strong>
          <ul>
            <li>- Elastic bands are used to return the wrist to its neutral position after the motors release tension.</li>
          </ul>
        </li>
      </ul>
      \b
      <h3 style="text-align: center;"><strong>Demo</strong></h3>
        <video width="510" height="400" controls autoplay muted loop style="display: block; margin: auto;">
        <source src="wrist.mp4" type="video/mp4">
         Your browser does not support the video tag.
       </video>

    `,
    technologies: ["Rehabilitation Robotics", "Pygame", "Robotic Glove"],
    reportLink: "wrist.pdf",
  },
  {
    id: 4,
    title: "Seven Segment Display with Robot Formation of Six Robots",
    shortDescription:
      "Developed a six-robot system to mimic seven segment displays, aiming for multi-robot coordination and localization.",
    fullDescription: `
      <p>This project focused on developing a multi-robot system that mimics the behavior of a seven-segment display. The goal was to explore and implement techniques for robot coordination, localization, and formation control.</p>
      <img src="CPS.jpg" alt="CPS" width="450" style="display: block; margin: auto;">
\b
      <h5 style="text-align: center;">Camera View</h5>
      <img src="cameraView.png" alt="camera" width="430" style="display: block;  margin: auto;">
\b
      <h3 style="text-align: center;"><strong>Demo</strong></h3>
        <video width="510" height="360" controls autoplay muted loop style="display: block; margin: auto;">
        <source src="CPS.mp4" type="video/mp4">
         Your browser does not support the video tag.
       </video>
      

    `,
    technologies: ["Swarm Robotics", "Control Systems", "Hardware"],
  },
  {
    id: 5,
    title: "Soft Robotic Snake Limb",
    shortDescription:
      "Designed and Fabricated a bio-inspired robotic snake Limb using soft materials and pneumatic control.",
    fullDescription: `
      <h3 style="text-align: center;"><strong>Project Overview</strong></h3>
      <p>My peers and I developed a soft robotic snake limb that can move effectively in unstructured environments due to its flexibility and biomimetic design. We created a trapezoidal pneunet structure to enhance stability and adaptability.</p>
        <video width="510" height="360" controls autoplay muted loop style="display: block; margin: auto;">
        <source src="snake.mp4" type="video/mp4">
         Your browser does not support the video tag.
       </video>
      \b
      <h3 style="text-align: center;"><strong>Design and Fabrication</strong></h3>
      <p> We designed CAD molds using SolidWorks and then 3D printed these molds with PLA. We chose Dragon Skin 10 silicone for fabricating the actuators due to its flexibility and stiffness. Each robot limb has three actuators, requiring six fabricated molds in total. We also designed a push notch to secure the actuators together. The robot is fully pneumatically actuated. The front limb is equipped with a granular gripper made from a rubber balloon filled with coffee beans, which is also pneumatically actuated to enable object grasping. </p>
      <div style="display: flex; justify-content: center; gap: 20px;">
       <img src="snake cad.png" alt="snake cad" width="290" style="display: block;">
       <img src="snake molds.jpg" alt="snake molds" width="290" style="display: block;"> 
      </div>

      \b
      <h3 style="text-align: center;"><strong>Final Model</strong></h3>
      <img src="snakefinal.png" alt="snakefinal" width="650" style="display: block; margin: auto;">
      \b
      <h3 style="text-align: center;"><strong>Testing and Analysis</strong></h3>
      <p>Conducted mechanical testing on one of the actuators. Performed finite element analysis to understand the behavior of the soft structure. </p>
      \b
      <h5 style="text-align: center;">50 percent inflated limb</h5>
      <video width="400" height="500" controls autoplay muted loop style="display: block; margin: auto;">
        <source src="50 percent inflation.mov" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      \b
      <div style="display: flex; justify-content: center; gap: 1px; align-items: center;">
       <div style="text-align: center;">
          <h5>1. Pressure vs Strain</h5>
          <img src="snake data1.png" alt="snake data1" width="550" style="display: block; margin: auto;">
        </div>
       <div style="text-align: center;">
         <h5>2. Syringe Volume vs Force</h5>
         <img src="snake data2.png" alt="snake data2" width="550" style="display: block; margin: auto;">
       </div>
      </div>

      <p>  Results shows that as pressure increases, the strain also increases. Additionally, we found that as the volume of air increases, the force exerted by the actuator limb also increases.</p>
      \b
      <h3 style="text-align: center;"><strong>Challenges</strong></h3>
      <img src="snakechallenge.png" alt="snakechallenge" width="500" style="display: block; margin: auto;">
      <p>a) The initial circular pneunet structure had stability issues, leading to a redesign into a trapezoidal shape for greater robustness. </p>
      <p>b) Air bubbles often appeared when casting Dragon Skin 10 silicone, requiring careful fabrication techniques. </p>
    `,
    technologies: [
      "Soft Robotics",
      "Mechanical Design",
      "Mechanical Testing",
      "Granular Jamming",
    ],
  },
  {
    id: 9,
    title: "Path Planning using RRT star",
    shortDescription:
      "Implementing RRT & RRT* path planning algorithms",
    fullDescription: `
      <img src="" alt="RRT" width="450" style="display: block; margin: auto;">
      <h3>Project Ove</h3>
    
      <video width="510" height="360" controls style="display: block; margin: auto;" >
        <source src="" type="video/mp4">
         Your browser does not support the video tag.
       </video>

    `,
    technologies: ["MATLAB", "Path Planning Alogrithms"],
  },
  {
    id: 10,
    title: "Soft Actuators",
    shortDescription:
      "Fabricated soft actuators, also conducted mechanical testing on them ",
    fullDescription: `
      <p>Fabircation & Testing of different Soft Actuators<p>

          <h3 style="text-align: center;"><strong>Fiber-reinforced actuators</strong></h3>
     <video width="510" height="360" controls autoplay muted loop style="display: block; margin: auto;">
       <source src="softfiberreinforced.mp4" type="video/mp4">
       Your browser does not support the video tag.
      </video>
      \b
      <h3 style="text-align: center;"><strong>Pneunets</strong></h3>
      \b
      
   <figure style="text-align: center;">
     <figcaption><em>Finite Element Analysis of Pneunet actuators</em></figcaption>
      <video width="510" height="360" controls autoplay muted loop style="display: block; margin: auto;">
       <source src="softpneu.mp4" type="video/mp4">
       Your browser does not support the video tag.
      </video>
    </figure>
\b
    <h3 style="text-align: center;"><strong>Mckibben Artificial Muscles</strong></h3>
\b
    <h3 style="text-align: center;"><strong>SMA Finger actuator</strong></h3>
     <video width="510" height="360" controls autoplay muted loop style="display: block; margin: auto;">
       <source src="softsma.mp4" type="video/mp4">
       Your browser does not support the video tag.
      </video>

    `,
    technologies: ["FEA-Abaqus", "SMA", "Soft Actuators", "Mechanical Testing"],
  },
  {
    id: 7,
    title: "Human Detecting Quadcopter",
    shortDescription: "Developed a low-cost Quadcopter from scratch for real-time detection of humans",
    fullDescription: `
      <p>In this project, my peer and I development of a low-cost quadcopter from scratch capable of detecting humans in real-time for search and rescue appilcations.</p>
      \b
      <h3 style="text-align: center;"><strong>Chassis Design</strong></h3>
      <p> We designed our chassis using <strong>SolidWorks</strong> and 3D printed it with PLA. </p>
      <div style="display: flex; justify-content: center; gap: 15px;">
       <figure>
         <img src="quadbase.png" alt="Quad Base" width="300" style="display: block;">
         <figcaption style="text-align: center;"><em>Base</em></figcaption>
       </figure>
       <figure>
         <img src="quadtop.png" alt="Quad Top" width="300" style="display: block;">
          <figcaption style="text-align: center;"><em>Top</em></figcaption>
        </figure>
      </div>
\b
     <figure style="text-align: center;">
       <div style="display: flex; justify-content: center; gap: 15px;">
         <img src="quadarm.png" alt="Quad Arm" width="300" style="display: block;">
          <img src="quadarm1.png" alt="Quad Arm 1" width="300" style="display: block;">
       </div>
       <figcaption><em>Arm {67(S)&72(S) represents my teammates and my Id numbers} </em></figcaption>
     </figure>
\b    
     <figure style="text-align: center;">
       <div style="display: flex; justify-content: center; gap: 20px;">
         <img src="quadchassis.png" alt="Quad Arm" width="300" style="display: block;">
          <img src="quadchassis1.png" alt="Quad Arm 1" width="220" style="display: block;">
       </div>
       <figcaption><em>3D Printed Arm</em></figcaption>
     </figure>
      \b

      <h3 style="text-align: center;"><strong>Custom Flight Controller</strong></h3>
      <p> We custom-designed and soldered the flight controller, which includes a set of <strong>pin headers</strong> to receive roll, pitch, yaw, and throttle signals from the receiver module. 
      The <strong> MPU 6050 </strong> is initially calibrated to minimize offsets and provides the current orientation of the quadcopter. Using this feedback along with the desired orientation values, the <strong>Arduino Nano </strong> sends PWM signals to the <strong> electronic speed controller</strong>, which then regulates the four <strong>DC motors </strong> and the <strong> propellers </strong>. For flight stability, we implemented <strong> PID control </strong> for the stability. 
     </p>

      \b
     <figure style="text-align: center;">
       <div style="display: flex; justify-content: center; gap: 15px;">
         <img src="quadfcpcb.png" alt="Quadfcpcb" width="180" style="display: block;">
         <img src="quadfc.png" alt="Quadfcpcb" width="180" style="display: block;">
        </div>
       <figcaption><em>Flight-Controller</em></figcaption>
     </figure>
  
      <figure style="text-align: center;">
       <div style="display: flex; justify-content: center; gap: 15px;">
         <img src="quadfctest.png" alt="Quadfcpcb" width="160" style="display: block;">
         <img src="quadfctest1.png" alt="Quadfcpcb" width="160" style="display: block;">
       </div>
       <figcaption><em>Custom Flight-Controller Testing</em></figcaption>
     </figure>
 \b
      <h3 style="text-align: center;"><strong>Detection</strong></h3>
      <p> For human detection, we used a <strong>Raspberry Pi 4B</strong> paired with a webcam and <strong>TensorFlow Lite</strong> for computer vision tasks.
      \b
     <div style="display: flex; justify-content: center; align-items: center;">
        <video width="500" height="500" controls autoplay muted loop style="display: block; margin: auto;">
          <source src="quaddetection.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
     </div>
     \b
     <p> <em> Due to availability of <strong>Raspberry Pi Pico</strong> and weight considerations of the drone, we shifted to Rpi Pico, which provided similar functionalities.</em> </p>
     \b

    <h3 style="text-align: center;"><strong>Custom Transmitter</strong></h3>
     <figure style="display: flex; align-items: center; justify-content: center; gap: 5px;">
         <div style="max-width: 550px; text-align: left;">
            <p>
              We also custom designed our transmitter and receiver module. The circuit was designed, and the components were soldered onto a 
             <strong>Vero board</strong>. We used <strong>two-axis joysticks</strong>, an <strong>Arduino Uno</strong>, and 
             <strong>NRF24L01</strong> modules for wireless communication between the transmitter and receiver.  
             We powered the microcontroller with a <strong>9V battery</strong> and used an <strong>ASM 1117</strong> voltage regulator to provide 3.3V for the 
             NRF modules.
            </p>
         </div>
       <img src="quadtrans.jpeg" alt="Transmitter and Receiver Module" width="290" style="display: block;">
     </figure>
     \b 
      <figure>
       <figcaption style="text-align: center;"><em>NRF24L01 Testing</em></figcaption>
       <p> We adjusted the potentiometer knob for increasing values and transmitted them to test real-time wireless communication between the modules. </p>
       <img src="quadnrftesting.jpg" alt="Transmitter and Receiver testing"  width="350" style="display: block; margin: auto;">
     </figure>





    `,
    technologies: ["Custom Designed", "PCB & CAD", "Hardware & Software", "TensorFlow"],
  },
  {
    id: 8,
    title: "Gesture Controlled Robotic Car",
    shortDescription: "Engineered a gesture-operated robotic car",
    fullDescription: `
      <p>
      In this project, I developed a robotic car that is controlled by hand gestures using a custom-designed glove.
      </p>
      <img src="GCC.png" alt="gcc" width="400" style="display: block; margin: auto;">
      <p>
      \b
      <h3 style="text-align: center;"><strong>Project Overview</strong></h3>
      \b
     <p> I designed and soldered a transmitter circuit onto a vero board, which was embedded in the glove. The circuit consists of an Arduino Nano, an MPU6050 gyroscope/accelerometer, and an HC-05 Bluetooth module.
      As the hand moves, the MPU6050 detects the angular tilt and sends the updated values to the Arduino Nano using the I2C protocol. The Arduino processes this data and transmits corresponding movement commands through the HC-05 Bluetooth module via the UART protocol to another HC-05 module located in the robotic car. The second HC-05 forwards the received commands to an Arduino Mega, which then sends digital HIGH/LOW signals to an L293D motor driver, controlling the DC motors that drive the car's wheels.
      </p>
\b
      <h3 style="text-align: center;"><strong>HC05 Pairing</strong></h3>
      \b
      <div style="display: flex; justify-content: center; gap: 5px;">
     <video width="355" height="1200" controls autoplay muted loop style="display: block; margin: auto;">
        <source src="GCCpairing.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
  
      <video width="355" height="1200" controls autoplay muted loop style="display: block; margin: auto;">
        <source src="GCCpairing2.mp4" type="video/mp4">
       Your browser does not support the video tag.
      </video>
     </div>
\b
      <h3 style="text-align: center;"><strong>Demo</strong></h3>
      \b
        <video width="510" height="360" controls autoplay muted loop style="display: block; margin: auto;">
        <source src="GCC.mp4" type="video/mp4">
         Your browser does not support the video tag.
       </video>

      
    `,
    technologies: ["Circuit Design", "Soldering", "Wireless Communication", "Embedded"],
  },
  {
    id: 6,
    title: "FlexAssist: Vision-Controlled Soft Robotic Glove for Assisted Grasping",
    shortDescription:
      "Designed a vision-controlled soft robotic glove to assist individuals with partial motor loss in grasping tasks.",
    fullDescription: `
      <p>FlexAssist is an innovative project aimed at developing a vision-controlled soft robotic glove to assist individuals with partial motor loss in performing grasping tasks. This project combines elements of computer vision, soft robotics, and assistive technology to create a user-friendly and effective solution for improving quality of life.</p>
      <h3 style="text-align: center;"><strong>Project Overview</strong></h3>
      <h3 style="text-align: center;"><strong>Grasp Detection</strong></h3>
       <div style="display: flex; justify-content: center; gap: 20px; align-items: center;">
         <div style="text-align: center;">
           <h5>Pinch Grip</h5>
           <video width="330" height="1050" controls autoplay muted loop style="display: block; margin: auto;">
              <source src="flexpinch.mp4" type="video/mp4">
              Your browser does not support the video tag.
           </video>
          </div>
          <div style="text-align: center;">
            <h5>Spherical Grip</h5>
            <video width="330" height="1050" controls autoplay muted loop style="display: block; margin: auto;">
              <source src="flexspherical.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
           </div> 
        </div>

    `,
    technologies: ["Rehabilitation Soft Robotic Glove", "Computer Vision", "Hardware"],
  },
]

export default projects

