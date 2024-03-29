package com.example.ants.db.mapper.base;

import com.example.ants.db.entity.Project;
import com.example.ants.db.entity.ProjectExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

public interface ProjectBaseMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table project
     *
     * @mbg.generated
     */
    long countByExample(ProjectExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table project
     *
     * @mbg.generated
     */
    int deleteByExample(ProjectExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table project
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table project
     *
     * @mbg.generated
     */
    int insert(Project record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table project
     *
     * @mbg.generated
     */
    int insertSelective(Project record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table project
     *
     * @mbg.generated
     */
    List<Project> selectByExampleWithRowbounds(ProjectExample example, RowBounds rowBounds);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table project
     *
     * @mbg.generated
     */
    List<Project> selectByExample(ProjectExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table project
     *
     * @mbg.generated
     */
    Project selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table project
     *
     * @mbg.generated
     */
    int updateByExampleSelective(@Param("record") Project record, @Param("example") ProjectExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table project
     *
     * @mbg.generated
     */
    int updateByExample(@Param("record") Project record, @Param("example") ProjectExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table project
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(Project record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table project
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(Project record);
}