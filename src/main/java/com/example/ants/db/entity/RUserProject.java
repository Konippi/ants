package com.example.ants.db.entity;

public class RUserProject {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column r_user_project.user_id
     *
     * @mbg.generated
     */
    private Integer userId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column r_user_project.project_id
     *
     * @mbg.generated
     */
    private Integer projectId;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table r_user_project
     *
     * @mbg.generated
     */
    public RUserProject(Integer userId, Integer projectId) {
        this.userId = userId;
        this.projectId = projectId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table r_user_project
     *
     * @mbg.generated
     */
    public RUserProject() {
        super();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column r_user_project.user_id
     *
     * @return the value of r_user_project.user_id
     *
     * @mbg.generated
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column r_user_project.user_id
     *
     * @param userId the value for r_user_project.user_id
     *
     * @mbg.generated
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column r_user_project.project_id
     *
     * @return the value of r_user_project.project_id
     *
     * @mbg.generated
     */
    public Integer getProjectId() {
        return projectId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column r_user_project.project_id
     *
     * @param projectId the value for r_user_project.project_id
     *
     * @mbg.generated
     */
    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }
}