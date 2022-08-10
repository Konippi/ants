package com.example.ants.db.mapper.base;

import com.example.ants.db.entity.RUserProject;
import com.example.ants.db.entity.RUserProjectExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.RowBounds;

public interface RUserProjectBaseMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table r_user_project
     *
     * @mbg.generated
     */
    long countByExample(RUserProjectExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table r_user_project
     *
     * @mbg.generated
     */
    int deleteByExample(RUserProjectExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table r_user_project
     *
     * @mbg.generated
     */
    int insert(RUserProject record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table r_user_project
     *
     * @mbg.generated
     */
    int insertSelective(RUserProject record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table r_user_project
     *
     * @mbg.generated
     */
    List<RUserProject> selectByExampleWithRowbounds(RUserProjectExample example, RowBounds rowBounds);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table r_user_project
     *
     * @mbg.generated
     */
    List<RUserProject> selectByExample(RUserProjectExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table r_user_project
     *
     * @mbg.generated
     */
    int updateByExampleSelective(@Param("record") RUserProject record, @Param("example") RUserProjectExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table r_user_project
     *
     * @mbg.generated
     */
    int updateByExample(@Param("record") RUserProject record, @Param("example") RUserProjectExample example);
}