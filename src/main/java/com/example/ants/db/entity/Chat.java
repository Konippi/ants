package com.example.ants.db.entity;

import java.time.LocalDateTime;

public class Chat {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column chat.id
     *
     * @mbg.generated
     */
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column chat.user_id
     *
     * @mbg.generated
     */
    private Integer userId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column chat.project_id
     *
     * @mbg.generated
     */
    private Integer projectId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column chat.message
     *
     * @mbg.generated
     */
    private String message;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column chat.created_at
     *
     * @mbg.generated
     */
    private LocalDateTime createdAt;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table chat
     *
     * @mbg.generated
     */
    public Chat(Integer id, Integer userId, Integer projectId, String message, LocalDateTime createdAt) {
        this.id = id;
        this.userId = userId;
        this.projectId = projectId;
        this.message = message;
        this.createdAt = createdAt;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table chat
     *
     * @mbg.generated
     */
    public Chat() {
        super();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column chat.id
     *
     * @return the value of chat.id
     *
     * @mbg.generated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column chat.id
     *
     * @param id the value for chat.id
     *
     * @mbg.generated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column chat.user_id
     *
     * @return the value of chat.user_id
     *
     * @mbg.generated
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column chat.user_id
     *
     * @param userId the value for chat.user_id
     *
     * @mbg.generated
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column chat.project_id
     *
     * @return the value of chat.project_id
     *
     * @mbg.generated
     */
    public Integer getProjectId() {
        return projectId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column chat.project_id
     *
     * @param projectId the value for chat.project_id
     *
     * @mbg.generated
     */
    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column chat.message
     *
     * @return the value of chat.message
     *
     * @mbg.generated
     */
    public String getMessage() {
        return message;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column chat.message
     *
     * @param message the value for chat.message
     *
     * @mbg.generated
     */
    public void setMessage(String message) {
        this.message = message;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column chat.created_at
     *
     * @return the value of chat.created_at
     *
     * @mbg.generated
     */
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column chat.created_at
     *
     * @param createdAt the value for chat.created_at
     *
     * @mbg.generated
     */
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}