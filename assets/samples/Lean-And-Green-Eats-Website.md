# Lean And Green Eats Website

## Sample
This section represents a student health page of the Lean And Green Eats website. It contains HTML content including informational sections about student nutrition and mental health, a navigation header, and an interactive survey form that collects user input using various form elements such as dropdowns, radio buttons, text fields, and range inputs.

---
```html
<!Doctype html>
<html lang="en">
<head>
    <!--
    [HTML Document for the Lean & Green Eats Website]
    Author: Leon Wasiliew
    Group: Little Programming Joint
    Date: 2024-12-05
    
    Filename: lge_student.html
    Folder: WEBD1000_Group Project_LGE/lge_leon
    -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Lean & Green Eats</title>
    <link href="lge_reset.css"rel="stylesheet" />
    <link href="lge_general.css" rel="stylesheet" />
    <link href="lge_student.css" rel="stylesheet" />
    <link href="media_styles.css" rel="stylesheet" />
	<!--Script that ensures that the message will displayed only after submitting the form-->
    <script>
        function showMessage(event) {
            event.preventDefault();
            document.getElementById('studentHealth').style.display = 'none';
            document.getElementById('submissionMessage').style.display = 'block';
}
    </script>

</head>
<body>
    <header>
		<!--Header of the Lean & Green Eats Website-->
        <div class="header">
			<!--An image of vegetables and fruits used for the header-->
            <img src="https://t3.ftcdn.net/jpg/06/09/31/24/360_F_609312487_cnMcTSARF8C4RMMDqkjkYxBBWE3MUH69.jpg" alt="Header image of healthy food" />
            <h1 class ="title">Student Health</h1>
        </div>
		<!--Horizontal navigation bar-->
        <nav class="horizontalnav">
            <ul class="horizontal_list">
                <li><a href="../lge_portia/lge_home.html">Home</a></li>
                <li><a href="../lge_john/lge_about.html">About Us</a></li>
                <li><a href="lge_student.html">Student Health</a></li>
                <li><a href="../lge_john/lge_healthy.html">Plan Healthy Snacks</a></li>
                <li><a href="../lge_portia/lge_tips.html">Tips & Tricks</a></li>
            </ul>
        </nav>
    </header>
	
    <main>
        <h2>Student Health</h2>
		<!--First Section of the LGE Website with a row wrap flex flow-->
        <div class="flexBox" id="flex_div1">
            <div class="healthBox" id="health_div1">
                <p>Food is essential for our bodies to function, as it is the primary source for our body to obtain the necessary nutrients. 
                Gaining a basic understanding of nutrition concepts such as the roles of macronutrients and micronutrients, 
                what you should consume, and how to read food labels can be a great starting point when planning to be healthier. 

                <p>As you learn more about food, nutrition, and your body, you will realize that eating healthy is not just about the food you eat, 
                the nutrients you intake, or a balanced daily life. <cite>“Eating healthily is also about where, when, why, and how you eat.”</cite> 
                <a href="https://students.ubc.ca/health/health-topics/food-nutrition">(Food and Nutrition, 2016)</a></p>
            </div>
            <div class="healthBox" id="div2">
                <p>As a college or university student, there is a high chance you will develop unhealthy eating habits 
                due to the stress caused by your classes or due to the unfamiliar setting. In addition, 
                starting out at a secondary school often means being more independent and having more responsibility 
                for meals and overall well-being. Therefore, making healthy eating choices at this stage is a crucial part of your life 
                as it contributes to your eating pattern, teaches you healthy habits to rely on, 
                gives you energy for effective learning and stressful tasks, 
                and can reduce the long-term risk of developing chronic diseases. 
                <a href="https://food-guide.canada.ca/en/tips-for-healthy-eating/healthy-eating-campus/">(Canada, 2024)</a></p>
            </div>
			<!--An image of an animated carrot and fruits-->
            <img id="superFruit" src="https://www.pinclipart.com/picdir/big/460-4603018_fruits-and-vegetables-animation-png-download-fruits-and.png" alt="" />
        </div>
		<!--Second section of the LGE Website with a row wrap flex flow-->
        <div  class="flexBox" id="flex_div2">
            <div class="healthBox_long" id="div3">
                <p>On an anatomical level, foods that are dense in macro and micronutrients are more beneficial for our body and our physical health. 
                In unison, being physically active and eating well will make you feel more energetic, it will meet your basic nutritional needs 
                and improve your overall health, and it lowers the risk of health related problems and diseases including cancer, heart disease, 
                and type 2 diabetes. <a href="https://food-guide.canada.ca/en/tips-for-healthy-eating/physical-activity-healthy-eating/">(Canada, 2021)</a>
                The relationship between your dietary habits and physical health is apparent, but what about your mental health? 
                There are still a lot of disputes regarding this question, so we will have to collect more information and conduct more observational studies to be conclusive. 
                However, observational evidence of the research <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9828042/">(Selvaraj et al., 2022)</a> suggests that following a healthy and balanced diet may lower the risk 
                of developing depressive symptoms or clinical depression.</p>
            </div>
            <div class="healthBox" id="div4">
                <p>According to a research article <a href="https://doi.org/10.1017/s0029665120005431">(Wilson et al., 2020)</a> published by the Cambridge University Press, 
                an estimated 19% of 16 to 24-year-olds suffer from a mental health condition. 
                Statistics have shown a fivefold increase in reported mental health problems 
                among first-year university students since 2006 and 2007. 
                There is insufficient evidence to conclude that nutritional status impacts one's mental health, 
                but consistency is found among scientific research and surveys pointing to a direct relation.</p>
            </div>
			<!--An image of a statistics to indicate that this section is about statistics-->
            <img id="healthStats" src="statistics.png" alt="" />
            <div class="healthBox" id="div5">
                <p>In 2019, data collected by the ‘National College Health Assessment’ concerning health and health behaviours 
                of post-secondary students from the U.S. and Canada suggested that over the previous year at least once:</p>
                <ul>
                    <li><p>51% of students had felt depressed that they found it difficult to function</p></li>
                    <li><p>69% had felt overwhelming anxiety</p></li>
                    <li><p>16% had seriously considered suicide</p></li>
                </ul>
            </div>
        </div>
    </main>

    <hr />

    <section>
        <h2>Student Health Survey</h2>
		<!--A Form for Students that they can fill out and submit which triggers an event-->
        <form id="studentHealth" onsubmit="showMessage(event)">
			<!--First portion of the Student Health Survey-->
            <fieldset>
                <legend>Health Info</legend>
                <label for="healthToday">How are you felling today?</label>
                <select name="healthToday" id="healthToday">
                    <option value="">Select Mood</option>
                    <option value="1">miserable</option>
                    <option value="2">meh</option>                
                    <option value="3">okay</option>          
                    <option value="4">great</option>
                    <option value="5">awesome</option>
                </select>
                <br /><br />
                <label for="confidentGraduate">How confident are you in your ability to graduate?
                        (0 = Doubtful; 10 = Certain)</label>
                0
                <input name="confidentGraduate" id="confidentGraduate" type="range"
                       value ="5" step="1" min="0" max="10" />
                10
                <br /><br />
                <label>Have you felt immense stress in the past month?</label>
                <br /><br />
                <fieldset>
                    <label for="stressYes">Yes</label>
                    <input name="immenseStress" id="stressYes" type="radio" />
                    <label for="stressNo">No</label>
                    <input name="immenseStress" id="stressNo" type="radio" />
                    <label for="stressSlightly">Slightly</label>
                    <input name="immenseStress" id="stressSlightly" type="radio"/>
                </fieldset>
                <br />
                <label for="thinkingSchool">On average, how many hours do you think about school each day?</label>
                <input type="number" name="thinkingSchool" id="thinkingSchool"
                value="0" step=".5" min="0" max="24"/>
                <br /><br />
                <label for="copingStrategies">What strategy do you use to cope with stress the most?</label>
                <select name="strategyName" id="copingStrategies">
                    <option select="">Select Activity</option>
                    <option value="responsibility">Avoiding Responsibility</option>
                    <option value="drinking">Drinking Water</option>
                    <option value="eating">Eating Food</option>
                    <option value="hobbies">Engaging in Hobbies</option>
                    <option value="listening">Listening to music</option>
                    <option value="shopping">Going shopping</option>
                    <option value="reading">Reading books</option>
                    <option value="sleeping">Sleeping</option>
                    <option value="talking">Talking to Friends</option>
                    <option value="substances">Using substances</option>
                    <option value="watchig">Watching TV</option>
                    <option value="other">Other</option>
                </select>
                <br /><br />
                <label for="schoolStruggle">What are some struggles you encounter at school?</label>
                <textarea name="schoolStruggle" id="schoolStruggle" placeholder="Please enter here."></textarea>
            </fieldset>

			<!--Second portion of the Student Health Survey-->
			<fieldset>
				<legend>Food Info</legend>
				<label for="favoriteFood">What is your favorite food to eat currently?</label>
				<input type="text" name="favoriteFood" type="favoriteFood"/>
				<br /><br />
				<label>Do you follow any dietary restrictions</label>
				<br /><br />
				<fieldset>
					<label for="dietaryYesR">Yes (required)</label>
					<input name="dietaryRestriction" id="dietaryYesR" value="yes (required)" type="radio" />
					<label for="dietaryYesO">Yes (optional)</label>
					<input name="dietaryRestriction" id="dietaryYesO" value="yes (optional)" type="radio" />
					<label for="dietaryNo">No</label>
					<input name="dietaryRestriction" id="dietaryNo" value="no" type="radio" />
				</fieldset>
				<br />
				<label for="foodTypes">Which of the food types do you consume on a daily?<br/>(Hold Ctrl or Command Key to select more options)</label>
				<br />
				<select name="typeName" id="foodTypes" size="10" multiple>
					<option select="fruits">Fruits</option>
					<option value="vegetables">Vegetables</option>
					<option value="grains">Grains and Cereals</option>
					<option value="breads">Breads</option>
					<option value="proteins">Proteins</option>
					<option value="dairy">Dairy</option>
					<option value="fats">Fats and Oils</option>
					<option value="sweets">Sweets</option>
					<option value="snacks">Snacks</option>
					<option value="ethnic">Ethinc Cuisine Types</option>
				</select>
			</fieldset>

            <div id="buttons">
                <input type="submit" value="Submit Survey" />
                <input type="reset" value="Cancel" />
            </div>
        </form>
		<!--The message that will be displayed if the submit button has been pressed-->
        <div id="submissionMessage" style="display: none;">
            <h3>Thank you for submitting this Student Survey!</h3>
        </div>
		
		<!--Third and fina; section of the LGE Website with a row wrap flex flow-->
        <h2>Reminder to yourself:</h2>
        <div class="flexBox" id="flex_div3">
            <div class="healthBox" id="div5">
                <p>When foods are labeled as “healthy” or “unhealthy,” 
                you might feel guilty for eating something that is “unhealthy” or “bad for you,” 
                but you shouldn't make yourself feel bad for eating these types of foods. 
                Viewing foods through a black-and-white lens will negatively impact your relationship with food, eating, and your body. 
                Just remember that you can still eat your favorite snacks as long as they are in a balanced diet. (Eating & Nutrition 101, 2023)
                <br /><br />
                Achieving a balanced diet can be accomplished by incorporating nutritious foods in your diet, and being mindful and appreciative
                of the food you are consuming. As a student you might want to consider eating foods that give your brain the extra nutrition
                it requires to function even more productively. Research shows that green, leafy vegtables, fatty fish, berries, and nuts have
                nutrients and acids that improve your heart and blood vessels, as well as boost your brainpower. 
                <a href="https://www.health.harvard.edu/healthbeat/foods-linked-to-better-brainpower">(Harvard Medical School, 2024)</a></p>
            </div>
			<!--An image of a sad student isolated from the rest of the world-->
            <img id="sadStudent" src="sad_student.png" alt="Sad Student" />
            <div class="healthBox" id="div6">
                <p>If you or someone you know is struggling with their eating habits or their mental health, it is always a good idea to reach out to them
                or another reliable set of ears. You can consult with your family, friends, teachers, local or online doctors. 
                The World Wide Web has wonderful resources about how you or your friend can improve your overall well-being. 
                It also has contact information and numbers to speak with a professional who will listen to your needs and help.<br/>
                Here is a list of some of the numbers available to you to ask for help, 
                or visit the <a href="https://novascotia.ca/mental-health-and-wellbeing/">Nova Scotia Mental Health and Wellbeing</a> website.<br/><br/>
                Suicide Crisis Helpline: <a href="tel:988">988</a><br/><br/>
                Wellbeing Helplin: <a href="tel:211">211</a><br/><br/>
                Non-Emergency Advice Helpline: <a href="tel:811">811</a><br/><br/>
                Good2Talk Nova Scotia: <a href="tel:+18332923698">1-(833)-292-3698</a>
                </p>
            </div>

        </div>
    </section>
	<!--Footer that has a Copyright statement-->
    <footer>
        &copy; 2024 Lean and Green Eats &bull; Nova Scotia, Canada &bull; All Rights Reserved
    </footer>
</body>
</html>
```
---