# Struts Framework Tutorial - From Basic to Advanced

## Table of Contents
1. [Introduction to Struts](#introduction)
2. [Setting Up Struts](#setup)
3. [Basic Concepts](#basic-concepts)
4. [Core Components](#core-components)
5. [Forms and Validation](#forms)
6. [Advanced Features](#advanced)
7. [Best Practices](#best-practices)
8. [Real-world Examples](#examples)

## Introduction to Struts <a name="introduction"></a>

### What is Struts?
Struts is a popular open-source web application framework that implements the Model-View-Controller (MVC) design pattern in Java. It was originally created by Craig McClanahan and donated to the Apache Foundation in 2000.

### Why Use Struts?
- Separation of concerns through MVC architecture
- Robust form handling and validation
- Extensive tag libraries
- Integration with other Java technologies
- Large community support

## Setting Up Struts <a name="setup"></a>

### Prerequisites
- JDK 8 or higher
- Apache Tomcat or any Java web container
- Maven (recommended for dependency management)

### Basic Project Structure
```
webapp/
├── src/
│   ├── main/
│   │   ├── java/
│   │   ├── resources/
│   │   └── webapp/
│   │       ├── WEB-INF/
│   │       │   ├── web.xml
│   │       │   └── struts-config.xml
│   │       └── jsp/
│   └── test/
└── pom.xml
```

### Maven Dependencies
```xml
<dependencies>
    <dependency>
        <groupId>org.apache.struts</groupId>
        <artifactId>struts2-core</artifactId>
        <version>2.5.27</version>
    </dependency>
</dependencies>
```

### Basic Configuration (web.xml)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app>
    <filter>
        <filter-name>struts2</filter-name>
        <filter-class>
            org.apache.struts2.dispatcher.filter.StrutsPrepareAndExecuteFilter
        </filter-class>
    </filter>
    
    <filter-mapping>
        <filter-name>struts2</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
</web-app>
```

## Basic Concepts <a name="basic-concepts"></a>

### Actions
Actions are the core controllers in Struts applications. They handle requests and contain the business logic.

```java
public class HelloWorldAction extends ActionSupport {
    private String message;
    
    public String execute() {
        message = "Hello, World!";
        return SUCCESS;
    }
    
    public String getMessage() {
        return message;
    }
}
```

### Struts Configuration (struts.xml)
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE struts PUBLIC
    "-//Apache Software Foundation//DTD Struts Configuration 2.5//EN"
    "http://struts.apache.org/dtds/struts-2.5.dtd">
<struts>
    <package name="default" extends="struts-default">
        <action name="hello" 
                class="com.example.actions.HelloWorldAction">
            <result>/jsp/hello.jsp</result>
        </action>
    </package>
</struts>
```

## Core Components <a name="core-components"></a>

### Interceptors
Interceptors provide cross-cutting functionality like validation, file upload handling, etc.

```java
public class CustomInterceptor extends AbstractInterceptor {
    @Override
    public String intercept(ActionInvocation invocation) throws Exception {
        // Pre-processing
        String result = invocation.invoke();
        // Post-processing
        return result;
    }
}
```

### Results
Results determine what happens after action execution.

```xml
<action name="login" class="com.example.LoginAction">
    <result name="success">/welcome.jsp</result>
    <result name="error">/login.jsp</result>
</action>
```

## Forms and Validation <a name="forms"></a>

### Form Handling
```java
public class RegisterAction extends ActionSupport {
    private String username;
    private String email;
    
    // Getters and setters
    
    @Override
    public String execute() {
        // Process form data
        return SUCCESS;
    }
}
```

### JSP Form
```jsp
<s:form action="register">
    <s:textfield name="username" label="Username"/>
    <s:textfield name="email" label="Email"/>
    <s:submit value="Register"/>
</s:form>
```

### Validation
```java
public class RegisterAction extends ActionSupport {
    @Override
    public void validate() {
        if (StringUtils.isEmpty(username)) {
            addFieldError("username", "Username is required");
        }
        if (!email.contains("@")) {
            addFieldError("email", "Invalid email format");
        }
    }
}
```

## Advanced Features <a name="advanced"></a>

### Custom Type Converters
```java
public class DateConverter extends StrutsTypeConverter {
    private static final String DATE_PATTERN = "MM/dd/yyyy";
    
    @Override
    public Object convertFromString(Map context, String[] values, Class toClass) {
        if (values != null && values.length > 0) {
            SimpleDateFormat sdf = new SimpleDateFormat(DATE_PATTERN);
            try {
                return sdf.parse(values[0]);
            } catch (ParseException e) {
                throw new TypeConversionException("Invalid date format");
            }
        }
        return null;
    }
    
    @Override
    public String convertToString(Map context, Object o) {
        if (o instanceof Date) {
            SimpleDateFormat sdf = new SimpleDateFormat(DATE_PATTERN);
            return sdf.format((Date) o);
        }
        return "";
    }
}
```

### AJAX Integration
```jsp
<s:url var="ajaxTest" value="/ajaxTest.action"/>
<sx:div id="resultDiv"
        href="%{ajaxTest}"
        updateFreq="3000"
        executeScripts="true">
    Initial content
</sx:div>
```

### Custom Tag Development
```java
public class CustomTag extends TagSupport {
    private String value;
    
    @Override
    public int doStartTag() throws JspException {
        try {
            pageContext.getOut().write(processValue(value));
        } catch (IOException e) {
            throw new JspException(e);
        }
        return SKIP_BODY;
    }
    
    // Getter and setter for value
}
```

## Best Practices <a name="best-practices"></a>

### 1. Action Organization
- Use meaningful package names
- Group related actions together
- Follow consistent naming conventions

### 2. Configuration Management
- Split configuration files by functionality
- Use constants for repeated values
- Implement environment-specific configurations

### 3. Security
```java
public class SecurityInterceptor extends AbstractInterceptor {
    @Override
    public String intercept(ActionInvocation invocation) throws Exception {
        Map<String, Object> session = ActionContext.getContext().getSession();
        if (session.get("user") == null) {
            return "login";
        }
        return invocation.invoke();
    }
}
```

## Real-world Examples <a name="examples"></a>

### Complete Login System
```java
public class LoginAction extends ActionSupport {
    private String username;
    private String password;
    private UserService userService;
    
    @Override
    public String execute() {
        User user = userService.authenticate(username, password);
        if (user != null) {
            Map<String, Object> session = ActionContext.getContext().getSession();
            session.put("user", user);
            return SUCCESS;
        }
        addActionError("Invalid credentials");
        return ERROR;
    }
    
    // Getters and setters
}
```

### File Upload with Progress
```java
public class FileUploadAction extends ActionSupport {
    private File file;
    private String fileContentType;
    private String fileFileName;
    
    @Override
    public String execute() {
        try {
            String destPath = ServletActionContext.getServletContext()
                .getRealPath("/uploads");
            File destFile = new File(destPath, fileFileName);
            FileUtils.copyFile(file, destFile);
            return SUCCESS;
        } catch (IOException e) {
            addActionError("Upload failed: " + e.getMessage());
            return ERROR;
        }
    }
    
    // Getters and setters
}
```

### Internationalization Example
```properties
# messages_en.properties
welcome.message=Welcome, {0}!
error.required=Field {0} is required

# messages_es.properties
welcome.message=¡Bienvenido, {0}!
error.required=El campo {0} es obligatorio
```

```java
public class WelcomeAction extends ActionSupport {
    @Override
    public String execute() {
        String username = getCurrentUser().getName();
        addActionMessage(getText("welcome.message", new String[]{username}));
        return SUCCESS;
    }
}
```

This concludes our comprehensive Struts tutorial. Remember to:
- Start with basic concepts before moving to advanced features
- Practice with small examples before building complex applications
- Refer to the official Struts documentation for detailed information
- Stay updated with the latest Struts versions and security patches

For further learning, explore:
- Struts plugins ecosystem
- Integration with other frameworks (Spring, Hibernate)
- Advanced security features
- Performance optimization techniques
