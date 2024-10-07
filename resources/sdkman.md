### What is SDKMAN!?
SDKMAN! is a tool for managing parallel versions of SDKs, including Java, and allows you to install and switch between multiple versions of Java easily. It's similar to NVM but designed for SDKs, including the Java JDK.

### How to install and use SDKMAN! to manage multiple JDKs:

#### Step 1: Install SDKMAN!
1. Open a terminal (or Command Prompt if using Windows with WSL or Git Bash).
2. Run the following command to install SDKMAN!:
   ```bash
   curl -s "https://get.sdkman.io" | bash
   ```

3. Follow the instructions displayed on the screen. After the installation, you may need to restart your terminal or run the following command to initialize SDKMAN!:
   ```bash
   source "$HOME/.sdkman/bin/sdkman-init.sh"
   ```

4. Verify that SDKMAN! is installed correctly by running:
   ```bash
   sdk version
   ```

#### Step 2: Install Multiple Versions of Java
Once SDKMAN! is installed, you can install multiple versions of the JDK easily.

1. **List available JDK versions**:
   ```bash
   sdk list java
   ```

2. **Install a specific version of Java**:
   To install Java 11, for example:
   ```bash
   sdk install java 11.0.11-open
   ```

   For Java 17:
   ```bash
   sdk install java 17.0.2-open
   ```

3. **Switch between Java versions**:
   You can switch between installed Java versions using:
   ```bash
   sdk use java 11.0.11-open
   ```
   Or set a default version with:
   ```bash
   sdk default java 11.0.11-open
   ```

4. **Check active Java version**:
   To verify the currently active version of Java, run:
   ```bash
   java -version
   ```

### Benefits of SDKMAN!:
- You can easily install, switch, and manage multiple versions of Java.
- It works across different operating systems (Linux, macOS, and Windows via WSL).
- It supports other SDKs besides Java, like Kotlin, Scala, Maven, Gradle, and more.
